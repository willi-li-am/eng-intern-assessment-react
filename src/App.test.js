import React from 'react';
import { render, screen, fireEvent, act } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App';

const advanceTimersByTime = (time) => {
  act(() => {
    jest.advanceTimersByTime(time);
  });
};

beforeEach(() => {
  jest.useFakeTimers();
});

afterEach(() => {
  jest.clearAllTimers();
  jest.useRealTimers();
});

it('starts the stopwatch', () => {
  render(<App />);
  const startButton = screen.getByRole('button', { name: /start/i });
  fireEvent.click(startButton);
  expect(startButton).toHaveTextContent('Stop');
});

it('stops the stopwatch', () => {
  render(<App />);
  const startButton = screen.getByRole('button', { name: /start/i });
  fireEvent.click(startButton);
  advanceTimersByTime(1000);
  const stopButton = screen.getByRole('button', { name: /stop/i });
  fireEvent.click(stopButton);
  expect(stopButton).toHaveTextContent('Start');
});

it('records a new lapse', () => {
  render(<App />);
  const startButton = screen.getByRole('button', { name: /start/i });
  fireEvent.click(startButton);
  advanceTimersByTime(1000);
  const lapButton = screen.getByRole('button', { name: /lapse/i });
  fireEvent.click(lapButton);
  const laps = screen.getAllByText(/lapse/i);
  expect(laps.length).toBeGreaterThan(0);
});

it('clears the stopwatch', () => {
  render(<App />);
  const startButton = screen.getByRole('button', { name: /start/i });
  fireEvent.click(startButton);
  advanceTimersByTime(1000); 

  const stopButton = screen.getByRole('button', { name: /stop/i });
  fireEvent.click(stopButton);
  advanceTimersByTime(1000); 

  const clearButton = screen.getByRole('button', { name: /clear/i });
  fireEvent.click(clearButton);

  expect(screen.getAllByText('00')[0]).toBeInTheDocument(); 
  expect(screen.getAllByText(':')).toHaveLength(2);
  expect(screen.getAllByText('00')[1]).toBeInTheDocument();
  expect(screen.getAllByText('00')[2]).toBeInTheDocument();
});
