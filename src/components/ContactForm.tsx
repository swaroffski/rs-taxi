"use client";
import { useState } from "react";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");

  const sendToTelegram = async () => {
    if (!name || !phone) {
      setStatus("Заполните имя и телефон!");
      return;
    }

    try {
      const res = await fetch("/api/telegram", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, phone, message }),
      });

      if (res.ok) {
        setStatus("Спасибо! Мы получили ваши данные.");
        setName("");
        setPhone("");
        setMessage("");
      } else {
        setStatus("Ошибка отправки, попробуйте позже.");
      }
    } catch (err) {
      setStatus("Ошибка отправки, попробуйте позже.");
    }
  };

  return (
    <div className="flex flex-col items-center mt-8 p-6 bg-white rounded shadow-md w-full max-w-md">
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Имя"
        className="mb-4 p-3 w-full border rounded"
      />
      <input
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        placeholder="Телефон"
        className="mb-4 p-3 w-full border rounded"
      />
      <textarea
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Сообщение (опционально)"
        className="mb-4 p-3 w-full border rounded"
      />
      <button
        onClick={sendToTelegram}
        className="bg-yellow-400 text-black font-bold p-3 rounded w-full"
      >
        Отправить
      </button>
      {status && <p className="mt-4 text-center">{status}</p>}
    </div>
  );
}