import React from 'react'
import Button from '../_Elements/Button';
import * as Styled from './styles';
import moment from 'moment';
import { useForm } from 'react-hook-form';
import useCart from '../../modules/Cart';
import { AuthContext } from '../../../providers/auth/AuthProvider';
import { useDispatch } from 'react-redux';

export default function PassengerTicket({ addTicket, removeTicket, tickets, ticketTotal, passengerTypes, schedule, validCart, dispatchCart }) {

    const { user } = React.useContext(AuthContext);
    console.log(schedule)
    let passengers = schedule.passengers.map(passenger => ({
        type: passenger.name,
        description: passenger.description,
        tickets: 0,
        quantity: 0,
        price: passenger.amount + schedule.price,
        total: 0,
        passengers: []
    }));


    const { register } = useForm();
    const passengerPrices = schedule.passengers.map(passenger => passenger.amount);
    const lowestPrice = Math.max(...passengerPrices);

    const [passengerTickets, setPassengerTickets] = React.useState(passengers);

    const submit = (e) => {
        e.preventDefault();
        dispatchCart();
    }
    return (
        <Styled.PassagerList>

            <Styled.InfoTrip>
                <Styled.InfoDetails>
                    <Styled.Period><i className={'las la-calendar'}></i> {`${moment(schedule?.start_date).format('DD/MM H:m')} - ${moment(schedule?.end_date).format('DD/MM H:m')}`}</Styled.Period>
                    <Styled.Vacancies> {schedule?.status.name}</Styled.Vacancies>
                </Styled.InfoDetails>
                <Styled.InfoDetails justify={'flex-end'}>
                    <Styled.InfoPriceValue>{new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL", }).format(schedule.price + lowestPrice)}</Styled.InfoPriceValue>
                    <Styled.InfoTop>A partir de</Styled.InfoTop>
                </Styled.InfoDetails>
            </Styled.InfoTrip>

            <Styled.TicketForm onSubmit={submit}>
                {passengerTypes?.map((passenger, index) => <Styled.Container key={index}>
                    <Styled.Info>
                        <Styled.Title>{passenger.type}</Styled.Title>
                        <Styled.Description>{passenger.description}</Styled.Description>
                    </Styled.Info>
                    <Styled.Action>
                        <Styled.ActionButton type={"button"} onClick={() => addTicket(passenger)}>+</Styled.ActionButton>
                        <Styled.Quantity {...register(passenger.type)}>{passenger.quantity}</Styled.Quantity>
                        <Styled.ActionButton type={"button"} onClick={() => removeTicket(passenger)}>-</Styled.ActionButton>
                    </Styled.Action>
                </Styled.Container>
                )}

                <Button disabled={!validCart} color={'primary'}>Fechar Pacote</Button>
            </Styled.TicketForm>

        </Styled.PassagerList>
    )
}