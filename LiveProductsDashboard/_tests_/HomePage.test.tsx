import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { setupStore } from '../src/store';
import Home from '../src/pages/HomePage';
import '@testing-library/jest-dom';
import { BrowserRouter as Router } from 'react-router';

jest.mock('../src/services/product', () => ({
  __esModule: true,
  ...jest.requireActual('../src/services/product'),
  useGetProductsQuery: jest.fn(),
}));

const mockUseGetProductsQuery = jest.requireMock('../src/services/product').useGetProductsQuery;

describe('HomePage Component', () => {
  const store = setupStore();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it(' Page loading', () => {
    mockUseGetProductsQuery.mockReturnValue({
      data: undefined,
      isLoading: true,
      isError: false,
    });

    render(
      <Provider store={store}>
        <Home />
      </Provider>
    );

    expect(screen.getByRole('progressbar')).toBeInTheDocument();
  });


  it('Error', () => {
    mockUseGetProductsQuery.mockReturnValue({
      data: undefined,
      isLoading: false,
      isError: true,
    });

    render(
      <Provider store={store}>
        <Home />
      </Provider>
    );

    expect(screen.getByText(/Loading data error/i)).toBeInTheDocument();
  });


  it('Empty data', () => {
    mockUseGetProductsQuery.mockReturnValue({
      data: [],
      isLoading: false,
      isError: false,
    });

    render(
      <Provider store={store}>
        <Home />
      </Provider>
    );

    expect(screen.getByText(/Loading data error/i)).toBeInTheDocument();
  });


  it('Product cards displayed successfully', () => {
    const mockProducts = [
      {
        id: 1,
        title: 'Backpack',
        price: 10,
        image: 'backpack.jpg',
        description: 'New backpack',
      },
      {
        id: 2,
        title: 'Sneakers',
        price: 20,
        image: 'sneakers.jpg',
        description: "Women's sneakers",
      },
    ];

    mockUseGetProductsQuery.mockReturnValue({
      data: mockProducts,
      isLoading: false,
      isError: false,
    });

    render(
      <Provider store={store}>
        <Router>
          <Home />
        </Router>
      </Provider>
    );

    const productElements = screen.getAllByTestId('product-card');
    expect(productElements).toHaveLength(2);
  });
});