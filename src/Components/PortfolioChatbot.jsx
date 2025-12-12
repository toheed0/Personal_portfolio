import React, { useState, useEffect, useRef } from 'react';

export default function PortfolioChatbot() {
const [open, setOpen] = useState(false);
const [messages, setMessages] = useState([
{ from: 'bot', text: 'Hi! Main aapki portfolio assistant hoon. Kuch poochna hai?' }
]);
const [input, setInput] = useState('');
const inputRef = useRef(null);


useEffect(() => {
if (open) inputRef.current?.focus();
}, [open]);


async function sendMessage(e) {
e?.preventDefault();
if (!input.trim()) return;
const userText = input.trim();
setMessages(prev => [...prev, { from: 'user', text: userText }]);
setInput('');


try {
const res = await fetch('http://localhost:8000/api/chat', {
method: 'POST',
headers: { 'Content-Type': 'application/json' },
body: JSON.stringify({ message: userText })
});
if (!res.ok) throw new Error('Server error');
const data = await res.json();
const botReply = data.reply || 'Sorry, kuch problem hogayi.';
setMessages(prev => [...prev, { from: 'bot', text: botReply }]);
} catch (err) {
setMessages(prev => [...prev, { from: 'bot', text: 'Server Error' }]);
console.error(err);
}
}


return (
    <>
{/* Right-bottom round button */}
<button
aria-label="Open chat"
onClick={() => setOpen(true)}
className="fixed right-6 bottom-14 z-50 w-14 h-14 rounded-full shadow-lg flex items-center justify-center bg-gradient-to-br from-indigo-500 to-purple-600 text-white hover:scale-105 transition-transform"
>
{/* simple chat icon (SVG) */}
<svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M21 12c0 4.418-4.03 8-9 8a9.86 9.86 0 01-4.255-.87L3 20l1.28-3.78A7.972 7.972 0 013 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
</svg>
</button>
<div className='fixed right-3 bottom-7 text-white font-bold z-50'>Ai Assiatan</div>


{/* Modal overlay */}
{open && (
<div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-4">
<div className="absolute inset-0 bg-black opacity-30" onClick={() => setOpen(false)}></div>


{/* Modal card */}
<div className="relative w-full max-w-md bg-transparent/50 rounded-2xl shadow-xl ring-1 ring-black ring-opacity-5 overflow-hidden">
<div className="flex items-center justify-between p-4 border-b">
<h3 className="text-lg font-medium text-white">Portfolio Assistant</h3>
<button onClick={() => setOpen(false)} className="text-white hover:text-red-700">Close</button>
</div>


<div className="p-4 h-80 overflow-y-auto" id="chat-scroll">
{messages.map((m, i) => (
<div key={i} className={`mb-3 max-w-full ${m.from === 'user' ? 'text-right' : 'text-left'}`}>
<div className={`inline-block px-3 py-2 rounded-lg ${m.from === 'user' ? 'bg-indigo-100 text-indigo-900' : 'bg-gray-100 text-gray-900'}`}>
{m.text}
</div>
</div>
))}
</div>


<form onSubmit={sendMessage} className="p-3 border-t flex gap-2 items-center">
<input
ref={inputRef}
value={input}
onChange={e => setInput(e.target.value)}
placeholder="Type your message..."
className="flex-1 px-3 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-indigo-400"
/>
<button type="submit" className="px-4 py-2 rounded-lg bg-indigo-600 text-white">Send</button>
</form>
</div>
</div>
)}
</>
);
}