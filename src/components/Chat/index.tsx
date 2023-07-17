'use client'
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "../ui/card";
import { useChat } from 'ai/react'

export default function () {
  const
    { messages, input, handleInputChange, handleSubmit } = useChat()
  return (
    <Card className='w-full h-full overflow-hidden max-w-[1200px] grid grid-rows-[min-content_1fr_min-content]'>
      <CardHeader className="bg-slate-600 text-slate-50">
        <CardTitle>Chat AI</CardTitle>
        <CardDescription className="text-slate-300">
          Using Vercel SDK to create a chat bot.
        </CardDescription>
      </CardHeader>
      <CardContent className='space-y-6 overflow-y-scroll py-4'>
        {messages.map(message => {
          return (
            <div key={message.id} className='flex leading-7 gap-4'>
              {message.role === 'user' &&
                <Avatar className='drop-shadow-md shadow-slate-800'>
                  <AvatarFallback>GL</AvatarFallback>
                  <AvatarImage src='' />
                </Avatar>}
              {message.role === 'assistant' &&
                <Avatar className='drop-shadow-md shadow-slate-800'>
                  <AvatarFallback>CB</AvatarFallback>
                  <AvatarImage src='' />
                </Avatar>}

              <p className='text-zinc-700'>
                <span className='block font-semibold'>
                  {message.role === 'user' ? 'Usuário' : 'Assitente'}
                </span>
                {message.content}
              </p>
            </div>
          )
        })}
      </CardContent>
      <CardFooter className="w-full">
        <form className="flex w-full gap-2" onSubmit={handleSubmit}>
          <Input className="w-full" placeholder='Send your question...' value={input} onChange={handleInputChange} />
          <Button type='submit'>Send</Button>
        </form>
      </CardFooter>
    </Card>
  );
}