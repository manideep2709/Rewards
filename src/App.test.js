import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

test('renders Reward Points header', () => {
  render(<App />);
  const linkElement = screen.getAllByText(/Reward Points/i)[0];
  expect(linkElement).toBeInTheDocument();
})

test('renders table', () => {
  const { container } = render(<App />);
  const table = container.querySelector('table');
  expect(table).toBeInTheDocument();
})

test('renders clickable table rows', () => {
  const { container } = render(<App />);
  const table = container.querySelector('table tbody tr.clickable');
  expect(table).toBeInTheDocument();
})

test('renders table headers', () => {
  const { container } = render(<App />)
  const headers = [/Customer/i, /Transaction Count/i, /Amount Spent/i, /Reward Points/i]

  for (let i=0; i<headers.length; i++) {
    const header = screen.getAllByText(headers[i])[0]
    expect(header).toBeInTheDocument()
  }
})

test('clicking table rows should show customer data', () => {
  const { container } = render(<App />)
  const tableRow = container.querySelector('table tbody tr')

  fireEvent.click(tableRow)

  const headers = [/Item Name/i, /Amount/i, /Reward Points/i]

  for (let i=0; i<headers.length; i++) {
    const header = screen.getAllByText(headers[i])[0]
    expect(header).toBeInTheDocument()
  }

  const customerName = screen.getByText(/Lucas/i)

  expect(customerName).toBeInTheDocument()
})