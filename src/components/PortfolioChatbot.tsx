'use client';

import { useEffect, useRef, useState, type FormEvent, type KeyboardEvent } from 'react';
import {
  ChatbotReply,
  getChatbotReply,
  getWelcomeReply,
  starterQuestions,
} from '@/lib/kartikChatbot';

type ChatMessage = {
  id: string;
  role: 'assistant' | 'user';
  content?: string;
  reply?: ChatbotReply;
};

const externalHrefPattern = /^https?:\/\//;
const responseDelayMs = 900;

function makeMessageId() {
  if (typeof crypto !== 'undefined' && 'randomUUID' in crypto) {
    return crypto.randomUUID();
  }

  return `${Date.now()}-${Math.random().toString(36).slice(2)}`;
}

const BotIcon = () => (
  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" aria-hidden>
    <path
      d="M6.75 8.5h10.5M6.75 12h6.5M8 19.25l-3.25 2v-4.1A6.7 6.7 0 0 1 3 12.58v-2.16C3 6.86 5.86 4 9.42 4h5.16C18.14 4 21 6.86 21 10.42v2.16c0 3.56-2.86 6.42-6.42 6.42H8Z"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const SendIcon = () => (
  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" aria-hidden>
    <path
      d="m5 12 14-7-4.4 14-2.6-5.8L5 12Z"
      stroke="currentColor"
      strokeWidth="1.9"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="m12 13.2 7-8.2"
      stroke="currentColor"
      strokeWidth="1.9"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const CloseIcon = () => (
  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" aria-hidden>
    <path
      d="m6 6 12 12M18 6 6 18"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const ResetIcon = () => (
  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" aria-hidden>
    <path
      d="M5.5 8.5A7.5 7.5 0 1 1 4.8 15"
      stroke="currentColor"
      strokeWidth="1.9"
      strokeLinecap="round"
    />
    <path
      d="M5 4v4.5h4.5"
      stroke="currentColor"
      strokeWidth="1.9"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const TypingIndicator = () => (
  <div className="flex justify-start" role="status" aria-live="polite">
    <div className="rounded-2xl rounded-bl-md border border-slate-200 bg-white px-4 py-3 text-sm font-medium text-slate-600 shadow-[0_12px_24px_rgba(15,23,42,0.08)]">
      <span>Looking that up</span>
      <span aria-hidden className="ml-1 inline-flex gap-0.5 align-middle">
        <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-cyan-600" />
        <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-cyan-600 [animation-delay:120ms]" />
        <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-cyan-600 [animation-delay:240ms]" />
      </span>
    </div>
  </div>
);

const PortfolioChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [isThinking, setIsThinking] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'welcome',
      role: 'assistant',
      reply: getWelcomeReply(),
    },
  ]);
  const inputRef = useRef<HTMLInputElement>(null);
  const replyTimerRef = useRef<number | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  const clearReplyTimer = () => {
    if (replyTimerRef.current === null) return;

    window.clearTimeout(replyTimerRef.current);
    replyTimerRef.current = null;
  };

  const askQuestion = (question: string) => {
    const trimmedQuestion = question.trim();
    if (!trimmedQuestion || isThinking) return;

    const reply = getChatbotReply(trimmedQuestion);

    setMessages((currentMessages) => [
      ...currentMessages,
      {
        id: makeMessageId(),
        role: 'user',
        content: trimmedQuestion,
      },
    ]);
    setInputValue('');
    if (inputRef.current) {
      inputRef.current.value = '';
    }

    setIsThinking(true);
    clearReplyTimer();
    replyTimerRef.current = window.setTimeout(() => {
      setMessages((currentMessages) => [
        ...currentMessages,
        {
          id: makeMessageId(),
          role: 'assistant',
          reply,
        },
      ]);
      setIsThinking(false);
      replyTimerRef.current = null;
    }, responseDelayMs);
  };

  const sendCurrentInput = () => {
    askQuestion(inputRef.current?.value ?? inputValue);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    sendCurrentInput();
  };

  const handleInputKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key !== 'Enter' || event.nativeEvent.isComposing) {
      return;
    }

    event.preventDefault();
    sendCurrentInput();
  };

  const resetChat = () => {
    clearReplyTimer();
    setMessages([
      {
        id: 'welcome',
        role: 'assistant',
        reply: getWelcomeReply(),
      },
    ]);
    setIsThinking(false);
    setInputValue('');
    if (inputRef.current) {
      inputRef.current.value = '';
    }
  };

  useEffect(() => {
    if (isOpen && !isThinking) {
      inputRef.current?.focus();
    }
  }, [isOpen, isThinking, messages.length]);

  useEffect(() => {
    const animationFrame = window.requestAnimationFrame(() => {
      scrollRef.current?.scrollTo({
        top: scrollRef.current.scrollHeight,
        behavior: 'auto',
      });
    });

    return () => window.cancelAnimationFrame(animationFrame);
  }, [messages, isOpen, isThinking]);

  useEffect(() => {
    return () => clearReplyTimer();
  }, []);

  return (
    <div className="fixed bottom-5 right-5 z-[60] flex max-w-[calc(100vw-2.5rem)] flex-col items-end gap-3">
      {isOpen && (
        <section
          className="surface-panel-strong flex h-[min(38rem,calc(100vh-2rem))] w-[min(26rem,calc(100vw-2.5rem))] flex-col overflow-hidden rounded-2xl"
          aria-label="Kartik profile chatbot"
        >
          <header className="border-b border-slate-200 bg-white/92 px-4 py-4 backdrop-blur">
            <div className="flex items-start justify-between gap-3">
              <div className="flex items-center gap-3">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-slate-900 text-sm font-bold text-white shadow-[0_12px_24px_rgba(15,23,42,0.2)]">
                  KA
                </span>
                <div>
                  <p className="text-base font-semibold leading-tight text-slate-900">Ask About Kartik</p>
                  <div className="mt-1 flex flex-wrap gap-1.5">
                    {['Resume', 'Website', 'LinkedIn', 'Substack'].map((source) => (
                      <span
                        key={source}
                        className="rounded-full border border-cyan-200 bg-cyan-50 px-2 py-0.5 text-[0.68rem] font-semibold text-cyan-800"
                      >
                        {source}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-1.5">
                <button
                  type="button"
                  onClick={resetChat}
                  className="grid h-8 w-8 place-items-center rounded-lg border border-slate-200 bg-white text-slate-500 transition hover:border-slate-300 hover:text-slate-900"
                  aria-label="Reset chat"
                  title="Reset chat"
                >
                  <ResetIcon />
                </button>
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="grid h-8 w-8 place-items-center rounded-lg border border-slate-200 bg-white text-slate-500 transition hover:border-slate-300 hover:text-slate-900"
                  aria-label="Close chat"
                  title="Close"
                >
                  <CloseIcon />
                </button>
              </div>
            </div>
          </header>

          <div
            ref={scrollRef}
            className="flex-1 space-y-4 overflow-y-auto bg-slate-50/72 px-4 py-4"
            aria-live="polite"
          >
            {messages.map((message) => {
              if (message.role === 'user') {
                return (
                  <div key={message.id} className="flex justify-end">
                    <div className="max-w-[85%] rounded-2xl rounded-br-md bg-slate-900 px-4 py-3 text-sm font-medium leading-relaxed text-white shadow-[0_12px_26px_rgba(15,23,42,0.18)]">
                      {message.content}
                    </div>
                  </div>
                );
              }

              if (!message.reply) return null;

              const showSourceLinks = message.id !== 'welcome' && message.reply.sources.length > 0;
              const showContextSuggestions = message.id !== 'welcome' && message.reply.suggestions.length > 0;

              return (
                <div key={message.id} className="flex justify-start">
                  <div className="max-w-[92%] rounded-2xl rounded-bl-md border border-slate-200 bg-white px-4 py-3 text-sm leading-relaxed text-slate-700 shadow-[0_12px_24px_rgba(15,23,42,0.08)]">
                    <p className="font-semibold leading-snug text-slate-900">{message.reply.headline}</p>
                    {message.reply.points.length > 0 && (
                      <ul className="mt-3 space-y-2">
                        {message.reply.points.map((point) => (
                          <li key={point} className="flex gap-2">
                            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-600" aria-hidden />
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                    {showSourceLinks && (
                      <div className="mt-3 flex flex-wrap gap-1.5 border-t border-slate-100 pt-3">
                        {message.reply.sources.map((source) => {
                          const isExternal = externalHrefPattern.test(source.href);

                          return (
                            <a
                              key={`${message.id}-${source.id}`}
                              href={source.href}
                              target={isExternal ? '_blank' : undefined}
                              rel={isExternal ? 'noopener noreferrer' : undefined}
                              className="rounded-full border border-slate-200 bg-slate-50 px-2.5 py-1 text-[0.7rem] font-semibold text-slate-600 hover:border-cyan-300 hover:bg-cyan-50 hover:text-cyan-800"
                            >
                              {source.label}
                            </a>
                          );
                        })}
                      </div>
                    )}
                    {showContextSuggestions && (
                      <div className="mt-3 flex flex-wrap gap-2">
                        {message.reply.suggestions.slice(0, 3).map((suggestion) => (
                          <button
                            key={`${message.id}-${suggestion}`}
                            type="button"
                            onClick={() => askQuestion(suggestion)}
                            disabled={isThinking}
                            className="rounded-full border border-cyan-200 bg-cyan-50 px-3 py-1.5 text-left text-xs font-semibold text-cyan-800 transition hover:bg-cyan-100 disabled:cursor-wait disabled:opacity-60"
                          >
                            {suggestion}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
            {isThinking && <TypingIndicator />}
          </div>

          <div className="border-t border-slate-200 bg-white px-4 py-3">
            <div className="mb-3 flex gap-2 overflow-x-auto pb-1">
              {starterQuestions.map((question) => (
                <button
                  key={question}
                  type="button"
                  onClick={() => askQuestion(question)}
                  disabled={isThinking}
                  className="shrink-0 rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs font-semibold text-slate-600 transition hover:border-cyan-300 hover:bg-cyan-50 hover:text-cyan-800 disabled:cursor-wait disabled:opacity-60"
                >
                  {question}
                </button>
              ))}
            </div>
            <form onSubmit={handleSubmit} className="flex items-center gap-2">
              <input
                ref={inputRef}
                value={inputValue}
                onChange={(event) => setInputValue(event.target.value)}
                onInput={(event) => setInputValue(event.currentTarget.value)}
                onKeyDown={handleInputKeyDown}
                disabled={isThinking}
                className="min-w-0 flex-1 rounded-xl border border-slate-300 bg-slate-50 px-3 py-2.5 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-cyan-500 focus:bg-white focus:ring-4 focus:ring-cyan-100 disabled:cursor-wait disabled:text-slate-500"
                placeholder={isThinking ? 'Finding the best answer...' : 'Ask about experience, skills, writing...'}
                aria-label="Ask a question about Kartik"
              />
              <button
                type="button"
                onClick={sendCurrentInput}
                disabled={isThinking}
                className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-slate-900 text-white transition hover:bg-slate-800 disabled:cursor-wait disabled:bg-slate-500"
                aria-label="Send question"
              >
                <SendIcon />
              </button>
            </form>
          </div>
        </section>
      )}

      <button
        type="button"
        onClick={() => setIsOpen((current) => !current)}
        className="inline-flex items-center gap-3 rounded-2xl border border-cyan-200 bg-slate-900 px-4 py-3 text-sm font-semibold text-white shadow-[0_18px_36px_rgba(15,23,42,0.24)] transition hover:-translate-y-1 hover:bg-slate-800 focus:outline-none focus:ring-4 focus:ring-cyan-200"
        aria-expanded={isOpen}
        aria-label={isOpen ? 'Close Kartik chatbot' : 'Open Kartik chatbot'}
      >
        <span className="grid h-8 w-8 place-items-center rounded-xl bg-white/12 text-cyan-100">
          <BotIcon />
        </span>
        <span className="hidden sm:inline">{isOpen ? 'Close Assistant' : 'Ask About Kartik'}</span>
      </button>
    </div>
  );
};

export default PortfolioChatbot;
