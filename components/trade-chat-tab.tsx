"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Clock, MessageSquare } from "lucide-react"

export function TradeChatTab({ trade, setTrade }) {
  const [newMessage, setNewMessage] = useState("")

  const handleSendMessage = (e) => {
    e.preventDefault()
    if (!newMessage.trim()) return

    const updatedTrade = {
      ...trade,
      messages: [
        ...trade.messages,
        {
          id: `${trade.messages.length + 1}`,
          sender: "user",
          content: newMessage,
          timestamp: new Date().toISOString(),
        },
      ],
    }

    setTrade(updatedTrade)
    setNewMessage("")
  }

  return (
    <Card className="web3-card">
      <CardHeader>
        <CardTitle>Trade Chat</CardTitle>
        <CardDescription>Communicate with your trading partner</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="h-[400px] overflow-y-auto space-y-4 p-4 border rounded-md">
            {trade.messages.map((message) => (
              <div key={message.id} className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}>
                <div
                  className={`max-w-[80%] rounded-lg p-3 ${
                    message.sender === "user"
                      ? "bg-neon-blue/20 text-white"
                      : message.sender === "system"
                        ? "bg-gray-800/50 text-gray-300 italic"
                        : "bg-neon-purple/20 text-white"
                  }`}
                >
                  {message.sender === "system" && <Clock className="inline h-3 w-3 mr-1" />}
                  <p>{message.content}</p>
                  <p className="text-xs text-gray-400 mt-1">{new Date(message.timestamp).toLocaleTimeString()}</p>
                </div>
              </div>
            ))}
          </div>

          <form onSubmit={handleSendMessage} className="flex gap-2">
            <Input
              placeholder="Type your message..."
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              className="flex-1"
            />
            <Button type="submit" className="bg-neon-purple hover:bg-neon-purple/90">
              <MessageSquare className="h-4 w-4 mr-2" />
              Send
            </Button>
          </form>
        </div>
      </CardContent>
    </Card>
  )
}

