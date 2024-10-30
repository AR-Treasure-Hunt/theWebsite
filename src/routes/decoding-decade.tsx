import { DecodingDecadeSection } from '@/sections/DecodingDecade/layout'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/decoding-decade')({
  component: DecodingDecadePage,
})

export function DecodingDecadePage() {
  return (
    <>
      <DecodingDecadeSection />
    </>
  )
}
