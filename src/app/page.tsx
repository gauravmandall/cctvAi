"use client";
import { ModeToggle } from '@/components/theme-toggle';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Camera, FlipHorizontal, PersonStanding, Video } from 'lucide-react';
import React, { useRef, useState } from 'react'
import { Rings } from 'react-loader-spinner';
import Webcam from 'react-webcam';
import { toast } from 'sonner';

type Props = {}

const HomePage = (props: Props) => {
  const webcamRef = useRef<Webcam>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // state 
  const [mirrored, setMirrored] = React.useState<boolean>(false);
  const [isRecording, setIsRecording] = React.useState<boolean>(false);
  const [autoRecordEnabled, setAutoRecordEnabled] = useState<boolean>(false);

  return (
    <div className='flex h-screen'>
      {/* Left division - webcam and Canvas */}
      <div className='relative'>
        <div className='relative h-screen w-full'>
          <Webcam
            /// <reference path="webcamRef" />
            ref={webcamRef}
            mirrored={mirrored}
            className='h-full w-full object-contain p-2'
          />
          <canvas
            ref={canvasRef}
            className='absolute top-0 left-0 h-full w-full object-contain p-2'
          />
        </div>
      </div>

      {/* Right division - container for buttons and wiki section */}

      <div className='flex flex-row flex-1'>
        <div className='border-primary/5 border-2 max-w-xs flex flex-col gap-2 justify-between shadow-md rounded-md p-4'>

          {/* Top section */}
          <div className='flex flex-col gap-2'>
            <ModeToggle />
            <Button
              onClick={() => {
                setMirrored((prev) => !prev);
              }}
              variant={'outline'}
              size={'icon'}
            >
              <FlipHorizontal />
            </Button>
            <Separator className='my-2' />
          </div>

          {/* Middle section */}
          <div className='flex flex-col gap-2'>
            <Separator className='my-2' />
            <Button
              variant={'outline'}
              size={'icon'}
              onClick={userPromptScreenshot}
            >
              <Camera />
            </Button>

            <Button
              variant={isRecording ? 'destructive' : 'outline'}
              size={'icon'}
              onClick={userPromptRecord}
            >
              <Video />
            </Button>


            <Separator className='my-2' />

            <Button
              variant={autoRecordEnabled ? 'destructive' : 'outline'}
              size={'icon'}
              onClick={toggleAutoRecord}
            >
              {autoRecordEnabled ? <Rings color='white' height={40} /> : <PersonStanding />}

            </Button>

          </div>
          {/* Bottom section */}
          <div className='flex flex-col gap-2'>
            <Separator />

            <Separator />
          </div>

        </div>
      </div>
    </div>
  )

  // handler functions
  function userPromptScreenshot() {
    // take picture

    // save it to the downloads
  }

  function userPromptRecord() {

    // check if recording
    // then stop recording
    // and save it to downloads

    // if not recording
    // then start recording
  }

  function toggleAutoRecord() {
    // check if auto recording
    if (autoRecordEnabled) {
      setAutoRecordEnabled(false);
      toast("Auto record disabled");
      // show toast to user to notify the change
    } else {
      setAutoRecordEnabled(true);
      toast("Auto record Enabled");
      // show toast to user to notify the change
    }

  }


}

export default HomePage