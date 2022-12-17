const Readable = require ('readable-stream')

export {}

declare global {
  type ReadableStream = unknown
//  type Blob = unknown
}
