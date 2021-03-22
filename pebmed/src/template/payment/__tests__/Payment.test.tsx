import React from 'react';

import { screen, act } from '@testing-library/react';
import { WrapperWithIsPreviewContext } from 'src/util/tests/RenderWithContext';
import { PaymentTemplate } from '../PaymentTemplate';
import * as subscriptionApi from 'src/service/post/subscription';
import { subscriptionResponseMock, valuesCreateSubscriptionMock } from './mock';
import userEvent from '@testing-library/user-event';

let providerProps = {
	subscription: null,
	handleSubscription: null
};

const submitSubsctiprion = () =>
	jest.spyOn(subscriptionApi, 'createSubscribe').mockImplementationOnce(subscriptionResponseMock);
const renderComponent = () => WrapperWithIsPreviewContext(<PaymentTemplate />, { providerProps });

describe('Payment ', () => {
	beforeEach(() => {
		providerProps.subscription = { id: 1, name: 'title name', price: 540, gateway: 'iugu', installmentsLimit: 12 };
	});

	it('should render Payment Container', async () => {
		await act(async () => {
			renderComponent();
		});
		expect(screen.getByTestId('PaymentContainer')).toBeInTheDocument();
	});
	it('should render message subscription is not selected', async () => {
		providerProps.subscription = null;
		await act(async () => {
			renderComponent();
		});
		expect(screen.queryByTestId('PlanNotSelected')).toBeInTheDocument();
	});
	it('should render payment with subscription selected', async () => {
		await act(async () => {
			renderComponent();
		});
		expect(screen.queryByTestId('PlanNotSelected')).not.toBeInTheDocument();
	});

	it('should render subscription name and price', async () => {
		await act(async () => {
			renderComponent();
		});
		expect(screen.getByText(providerProps.subscription.name)).toBeInTheDocument();
		expect(screen.queryAllByText(`R$ ${providerProps.subscription.price},00`)).toHaveLength(2);
	});

	it('should render person from', async () => {
		await act(async () => {
			renderComponent();
		});
		expect(screen.getByTestId('PersonFormComponent')).toBeInTheDocument();
	});
	it('should credit card form', async () => {
		await act(async () => {
			renderComponent();
		});
		expect(screen.getByTestId('CreditCardFormComponent')).toBeInTheDocument();
	});
	it('creating subscription', async () => {
		await act(async () => {
			renderComponent();
		});

		const cpfInput = screen.getByPlaceholderText('000.000.000-00');
		userEvent.type(cpfInput, valuesCreateSubscriptionMock.creditCardCPF);

		const number = screen.getByTestId('NumberCard');
		userEvent.type(number, valuesCreateSubscriptionMock.creditCardNumber);

		const valid = screen.getByTestId('ValidadeCard');
		userEvent.type(valid, valuesCreateSubscriptionMock.creditCardExpirationDate);

		const cvv = screen.getByTestId('CVVCard');
		userEvent.type(cvv, valuesCreateSubscriptionMock.creditCardCVV);

		const name = screen.getByTestId('nameCard');
		userEvent.type(name, valuesCreateSubscriptionMock.creditCardHolder);

		const component = screen.getByText('Ativar assinatura');
		userEvent.click(component);

		expect(cpfInput).toHaveValue('123.456.789-10');
		expect(number).toHaveValue(valuesCreateSubscriptionMock.creditCardNumber);
		expect(valid).toHaveValue('10/12');
		expect(cvv).toHaveValue(valuesCreateSubscriptionMock.creditCardCVV);
		expect(name).toHaveValue(valuesCreateSubscriptionMock.creditCardHolder.toUpperCase());
		expect(component).not.toBeDisabled();
	});
});
