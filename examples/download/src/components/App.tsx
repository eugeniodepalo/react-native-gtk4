import React, { useState } from "react"
import axios from "axios"
import { spawn } from "child_process"
import {
  ApplicationWindow,
  Button,
  Box,
  Label,
  Entry,
  ProgressBar,
  GLib,
  CenterBox,
  Gtk,
  useApplication,
} from "react-native-gtk4"
import fs from "fs"

const homeDir = GLib.getHomeDir()

const isValidUrl = (url: string) => {
  try {
    new URL(url)
    return true
  } catch (error) {
    return false
  }
}

const App = () => {
  const [url, setUrl] = useState("")
  const [progress, setProgress] = useState(0)
  const [error, setError] = useState<string | null>(null)
  const { quit } = useApplication()

  const downloadFile = async () => {
    setProgress(0)
    setError(null)

    try {
      const response = await axios({
        url,
        method: "GET",
        responseType: "stream",
      })

      const filePath = `${homeDir}/Downloads/${url.split("/").pop()}`
      const totalLength = response.headers["content-length"]
      let writer: fs.WriteStream

      writer = fs.createWriteStream(filePath)

      writer.on("error", (error: any) => {
        setError(error.toString())
      })

      writer.on("ready", () => {
        response.data.on("data", (chunk: any) => {
          writer.write(chunk)
          setProgress(writer.bytesWritten / totalLength)
        })

        response.data.on("end", () => {
          writer.end()

          const subprocess = spawn("xdg-open", [filePath])

          subprocess.on("close", () => {
            setProgress(0)
            setUrl("")
          })

          subprocess.on("error", (error: any) => {
            setError(error.toString())
          })
        })

        response.data.on("error", (error: any) => {
          setError(error.toString())
        })
      })
    } catch (error: any) {
      setError(() => error.toString())
    }
  }

  return (
    <ApplicationWindow title="URL Downloader" onCloseRequest={quit}>
      <CenterBox
        marginBottom={10}
        marginTop={10}
        marginEnd={10}
        marginStart={10}
        hexpand
        vexpand
      >
        <Box
          orientation={Gtk.Orientation.VERTICAL}
          spacing={10}
          valign={Gtk.Align.CENTER}
          widthRequest={300}
        >
          <Label label="Enter URL to download" />
          <Entry
            text={url}
            onChanged={(entry) => {
              setUrl(entry.text ?? "")
            }}
          />
          <ProgressBar fraction={progress} showText />
          {error ? <Label label={error} /> : null}
          <Button
            label="Download"
            onClicked={downloadFile}
            sensitive={isValidUrl(url)}
          />
        </Box>
      </CenterBox>
    </ApplicationWindow>
  )
}

export default App
