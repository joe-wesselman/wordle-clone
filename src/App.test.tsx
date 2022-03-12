import { describe, expect, it } from 'vitest'
import App from './App'
import { render, screen, userEvent } from './utils/test-utils'

describe('Simple working test', () => {
    it('the title is visible', () =>{
        render(<App/>);
        // testing doesn't work, not getting correct rendering
        // @ts-expect-error
        expect(screen.getByText(/Reacdle/i)).toBeInTheDocument();
    })
})