searchState.loadedDescShard("tungstenite", 0, "Lightweight, flexible WebSockets for Rust.\nA connector that can be used when establishing …\nPlain (non-TLS) connector.\n<code>rustls</code> TLS connector.\nAccept the given Stream as a WebSocket.\nAccept the given Stream as a WebSocket.\nAccept the given Stream as a WebSocket.\nAccept the given Stream as a WebSocket.\nA buffer for reading data from the network.\nMethods to connect to a WebSocket as a client.\nCreates a WebSocket handshake from a request and a stream, …\nThe same as <code>client_tls()</code> but one can specify a websocket …\nError handling.\nReturns the argument unchanged.\nWebSocket handshake control.\nCalls <code>U::from(self)</code>.\nGeneric WebSocket message stream.\nConvenience wrapper for streams to switch between plain …\nHelper traits to ease non-blocking handling.\nA FIFO buffer for reading packets from the network.\nGet a cursor to the data storage.\nGet a cursor to the mutable data storage.\nReturns the argument unchanged.\nCreate a input buffer filled with previously read data.\nCalls <code>U::from(self)</code>.\nConsume the <code>ReadBuffer</code> and get the internal storage.\nCreate a new empty input buffer.\nRead next portion of data from the given input stream.\nCreate a new empty input buffer with a given <code>capacity</code>.\nTrait for converting various types into HTTP requests used …\nDo the client handshake over the given stream.\nDo the client handshake over the given stream given a web …\nConnect to the given WebSocket in blocking mode.\nConnect to the given WebSocket in blocking mode.\nConvert into a <code>Request</code> that can be used for a client …\nGet the mode of the given URL.\nTrying to work with already closed connection.\nAttack attempt detected.\nWhen reading: buffer capacity exhausted.When writing: your …\nIndicates the specific type/cause of a capacity error.\nWebSocket connection closed normally. This informs you of …\nControl frames must have a payload of 125 bytes or less.\nCustom responses must be unsuccessful.\nThe URL host name, though included, is empty.\nContains the error value\nPossible WebSocket errors.\nReceived data while waiting for more fragments.\nControl frames must not be fragmented.\nNo more data while still performing handshake.\nHTTP error.\nHTTP format error.\nWrapper around a <code>httparse::Error</code> value.\nThe payload for the closing frame is invalid.\nDNS name resolution error.\nInvalid header is passed. Or the header is missing in the …\nEncountered an invalid opcode.\nInput-output error. Apart from WouldBlock, these are …\nGarbage data encountered after client request.\nThe client must close the connection when a masked frame …\nReceived header is too long. Message is bigger than the …\nMissing <code>Connection: upgrade</code> HTTP header.\nMissing <code>Sec-WebSocket-Key</code> HTTP header.\nMissing <code>Sec-WebSocket-Version: 13</code> HTTP header.\nMissing <code>Upgrade: websocket</code> HTTP header.\nThe URL does not include a host name.\nThe URL does not include a path/query.\nReserved bits in frame header are non-zero.\nContains the success value\nProtocol violation.\nIndicates the specific type/cause of a protocol error.\nRemote sent data after sending a closing frame.\nConnection closed without performing the closing handshake.\nResult type of all Tungstenite library calls.\nRustls error.\nThe <code>Sec-WebSocket-Accept</code> header is either not present or …\nNot allowed to send after having sent a closing frame.\nTLS error.\nTLS errors.\nTLS is used despite not being compiled with the TLS …\nToo many headers provided (see …\nFailed to connect with this URL.\nReceived a continue frame despite there being nothing to …\nType of control frame not recognised.\nType of data frame not recognised.\nThe server must close the connection when an unmasked …\nUnsupported URL scheme used (only <code>ws://</code> or <code>wss://</code> may be …\nInvalid URL.\nIndicates the specific type/cause of URL error.\nUTF coding error.\nMessage write buffer is full.\nUse of the wrong HTTP method (the WebSocket protocol …\nWrong HTTP version used (the WebSocket protocol requires …\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nThe maximum allowed message size.\nThe size of the message.\nHandshake failed.\nA handshake result.\nHandshake role.\nHandshake was interrupted (would block).\nA WebSocket handshake.\nClient handshake machine.\nDerive the <code>Sec-WebSocket-Accept</code> response header from a …\nReturns the argument unchanged.\nReturns the argument unchanged.\nAllow mutable access to machine\nAllow access to machine\nRestarts the handshake process.\nHTTP Request and response header handling.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nWebSocket handshake machine.\nServer handshake machine.\nClient handshake role.\nClient request type.\nClient response type.\nReturns the argument unchanged.\nGenerate a random key for the <code>Sec-WebSocket-Key</code> header.\nVerifies and generates a client WebSocket request from the …\nCalls <code>U::from(self)</code>.\nInitiate a client handshake.\nLimit for the number of header lines.\nReading round finished.\nWriting round finished.\nA generic handshake state machine.\nRound done, state unchanged.\nThe result of the round.\nStage complete.\nThe result of the stage.\nThe parseable object.\nRound not done, I/O would block.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns a mutable reference to the inner stream.\nReturns a shared reference to the inner stream.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nPerform a single handshake round.\nStart reading data from the peer.\nStart writing data to the peer.\nReturn Ok(None) if incomplete, Err on syntax error.\nThe callback trait.\nServer error response type.\nStub for callback that does nothing.\nServer request type.\nServer response type.\nServer handshake role.\nCreate a response for the request.\nCreate a response for the request with a custom body.\nReturns the argument unchanged.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalled whenever the server read the request from the …\nStart server handshake. <code>callback</code> specifies a custom …\nWrite <code>response</code> to the stream <code>w</code>.\nA binary WebSocket message\nThis socket is a client\nA close message with the optional close frame.\nRaw frame. Note, that you’re not going to get this value …\nAn enum representing the various forms of a WebSocket …\nA ping message with the specified payload\nA pong message with the specified payload\nIndicates a Client or Server role of the websocket\nThis socket is a server\nA text WebSocket message\nWebSocket input-output stream.\nThe configuration for WebSocket connection.\nA context for managing WebSocket stream.\nWhen set to <code>true</code>, the server will accept and handle …\nCreate a new binary WebSocket message by converting to …\nCheck if it is possible to read messages.\nCheck if it is possible to read messages.\nCheck if it is possible to write messages.\nCheck if it is possible to write messages.\nClose the connection.\nClose the connection.\nFlush writes.\nFlush writes.\nUtilities to work with raw WebSocket frames.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nConvert a raw socket into a WebSocket without performing a …\nCreate a WebSocket context that manages an post-handshake …\nConvert a raw socket into a WebSocket without performing a …\nRead the configuration.\nRead the configuration.\nReturns a mutable reference to the inner stream.\nReturns a shared reference to the inner stream.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nConsume the WebSocket and return it as binary data.\nAttempt to consume the WebSocket message and convert it to …\nIndicates whether a message is a binary message.\nIndicates whether a message is a close message.\nReturns true if the WebSocket message has no content. For …\nIndicates whether a message is a ping message.\nIndicates whether a message is a pong message.\nIndicates whether a message is a text message.\nGet the length of the WebSocket message.\nThe maximum size of a single incoming message frame. <code>None</code> …\nThe maximum size of an incoming message. <code>None</code> means no …\nDoes nothing, instead use <code>max_write_buffer_size</code>.\nThe max size of the write buffer in bytes. Setting this …\nCreate a WebSocket context that manages a post-handshake …\nRead a message from stream, if possible.\nRead a message from the provided stream, if possible.\nOld name for <code>read</code>.\nWrites and immediately flushes a message. Equivalent to …\nChange the configuration.\nChange the configuration.\nCreate a new text WebSocket message from a stringable.\nAttempt to get a &amp;str from the WebSocket message, this …\nWrite a message to the provided stream, if possible.\nWrite a message to the provided stream.\nThe target minimum size of the write buffer to reach …\nOld name for <code>send</code>.\nOld name for <code>flush</code>.\nA struct representing the close command.\nA struct representing a WebSocket frame.\nA struct representing a WebSocket frame header.\nA reader and writer for WebSocket frames.\nCreate a new Close control frame.\nThe reason as a code.\nVarious codes defined in RFC 6455.\nFlush writes.\nFormat a header for given payload size.\nWrite a frame out to a buffer\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nCreate a new frame socket from partially read data.\nCreate a frame from given header and data.\nReturns a mutable reference to the inner stream.\nReturns a shared reference to the inner stream.\nGet a reference to the frame’s header.\nGet a mutable reference to the frame’s header.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nConsume the frame into its payload as binary.\nExtract a stream from the socket.\nConvert into a owned string.\nConsume the frame into its payload as string.\nCheck if the frame is empty.\nIndicates that the frame is the last one of a possibly …\nGet the size of the header formatted with given payload …\nGet the length of the frame. This is the length of the …\nA frame mask, if any.\nCreate a new data frame.\nCreate a new frame socket.\nWebSocket protocol opcode.\nParse a header from an input stream. Returns <code>None</code> if …\nGet a reference to the frame’s payload.\nGet a mutable reference to the frame’s payload.\nCreate a new Ping control frame.\nCreate a new Pong control frame.\nRead a frame from stream.\nThe reason as text string.\nReserved for protocol extensions.\nReserved for protocol extensions.\nReserved for protocol extensions.\nWrites and immediately flushes a frame. Equivalent to …\nGet frame payload as <code>&amp;str</code>.\nWrite a frame to stream.\nIndicates an abnormal closure. If the abnormal closure was …\nIndicates that the server is overloaded and the client …\nIndicates that an endpoint is “going away”, such as a …\n0x2 denotes a binary frame\n0x8 denotes a connection close\nStatus code used to indicate why an endpoint is closing …\n0x0 denotes a continuation frame\nControl opcodes as in RFC 6455\nControl message (close, ping, pong).\nData opcodes as in RFC 6455\nData (text or binary).\nIndicates that a server is terminating the connection …\nIndicates that an endpoint (client) is terminating the …\nIndicates that an endpoint is terminating the connection …\nIndicates a normal closure, meaning that the purpose for …\nWebSocket message opcode as in RFC 6455.\n0x9 denotes a ping\nIndicates that an endpoint is terminating the connection …\n0xa denotes a pong\nIndicates that an endpoint is terminating the connection …\n0x3-7 are reserved for further non-control frames\n0xb-f are reserved for further control frames\nIndicates that the server is restarting. A client may …\nIndicates that an endpoint is terminating the connection …\nIndicates that no status code was included in a closing …\n0x1 denotes a text frame\nIndicates that an endpoint is terminating the connection …\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCheck if this CloseCode is allowed.\nA stream that might be protected with TLS.\nStream mode, either plain TCP or TLS.\nTrait to switch TCP_NODELAY.\nUnencrypted socket stream.\nPlain mode (<code>ws://</code> URL).\nEncrypted socket stream using <code>rustls</code>.\nTLS mode (<code>wss://</code> URL).\nReturns the argument unchanged.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nSet the TCP_NODELAY option to the given value.\nNon-blocking IO handling.\nNon-blocking IO wrapper.\nType of the converted result: <code>Result&lt;Option&lt;T&gt;, E&gt;</code>\nConvert WouldBlock to None and don’t touch other errors.\nPerform the non-block conversion.")