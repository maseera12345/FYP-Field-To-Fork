// Real-time chat events (implemented in the Chat module).
//   client -> server: "chat:send" { conversationId, text }
//                     "chat:typing" { conversationId }
//                     "chat:read" { conversationId }
//   server -> client: "chat:message", "chat:typing", "chat:read"
export function registerChatHandlers(io, socket) { // eslint-disable-line no-unused-vars
  // TODO (Chat module)
}
