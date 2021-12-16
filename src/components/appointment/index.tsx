import React, {useState, FormEvent} from 'react';
import styled from '@emotion/styled';
import DatePicker from "react-datepicker";
import {useMutation} from 'react-query';
import "react-datepicker/dist/react-datepicker.css";
import styles from '../../styles/components/appointment.module.scss';
import { whiteBackground, primary, textColorWhite, background } from '../../assets/colors';
import client from '../../api';
import axios, { AxiosError } from 'axios';

const Terms = styled.div({
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center'
})

const Label = styled.label({
    margin: '0 0 0 10px',
    padding: 'none',
    fontSize: '12px',
    fontWeight: 400,
});

const Card = styled.div`
    background-color: ${whiteBackground};
    margin: 0;
    position: absolute;
    top: -130px;
    width: 100%;
    box-shadow: 2px 4px 8px 2px rgba(198,198,198,.4);
    @media(max-width: 900px){
        position: relative;
        top: 0;
    }
`;

const Header = styled.header`
    background-color: ${primary};
    padding: 50px;
    color: ${textColorWhite};
    font-size: 26px;
    font-weight: 600;
    
    @media(max-width: 1200px){
        font-size: 16px;
    }
    
`;

const Form = styled.form`
    padding: 30px;
    display: flex;
    flex-direction: column;
`;

const Row = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    margin: 20px 0;
    align-items: center;

    @media(max-width: 1200px){
        flex-direction: column;
        margin: 0;
    }
`;

const Col = styled.div`
    margin: 0 10px;
    width: 100%;
    background-color: red;
    @media(max-width: 1200px){
        margin: 10px 0;
    }
`;

const Input = styled.input`
    border-radius: 0;
    border: none;
    background-color: ${background};
    padding: 20px;
    outline: none;
    min-width: 100%;

    &:active{
        outline: 1px solid ${primary};
    }
    &:focus{
        outline: 1px solid ${primary};
    }
`;

const DateComp = styled(DatePicker)`
    border-radius: 0;
    border: none !important;
    background-color: ${background};
    padding: 20px;
    outline: none  !important;
    min-width: 100%;

    &:active{
        outline: 1px solid ${primary};
    }
    &:focus{
        outline: 1px solid ${primary};
    }
`

const Submit = styled.input`
    margin: 20px;
    align-self: flex-end;
    background-color: #50B0B8;
    min-width: 150px;
    padding: 15px 10px;
    color: ${textColorWhite};
    display: inline-flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    text-decoration: none !important;
    border-radius: 10px;
    box-shadow: 1px 2px 4px 1px rgba(0,0,0,.2);
    font-size: 13px;
    font-weight: 900;
    outline: none;
    border: none;
    text-transform: uppercase;

    &:link{
        text-decoration: underline;
    }
    &:hover{
        text-decoration: none;
    }
    &:active{
        text-decoration: none;
        color: ${textColorWhite};
        box-shadow: none;
    }
`;

type IDetail = {
    name?: string;
    email?: string;
    phone?: string;
    when?: string;
}

const send_mail = async (form: IDetail) => {
    const {data} = await axios.post('https://smilesdotcom-api.herokuapp.com/appointments', form );
    return data;
}

export const AppointmentForm: React.FC = () => {
    const [startDate, setStartDate] = useState(new Date());
    const [agree, setAgree] = useState<boolean>(false)
    const [data, setData] = useState<IDetail>({when: startDate.toString()});
    const [text, setText] = useState<string>('Submit');
    const {mutate, isLoading} = useMutation(send_mail);

    const submit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if(isLoading){
            return;
        }

        mutate(data, {
            onSuccess: (res) => {
                setData({when: startDate.toString()});
                setText('Done');
                setTimeout(() => {
                    setText('Submit');
                }, 2000);
            },
            onError: (error: any) => {
                setData({when: startDate.toString()});
                setText('Failed');
                setTimeout(() => {
                    setText('Submit');
                }, 2000);
            }
        })
    }

    return(
        <Card>
            <Header>Make An Appointment Today!</Header>
            <Form id={styles.form} onSubmit={submit}>
                <Row>
                    <Col>
                        <Input 
                            placeholder="Your Name"
                            value={data.name}
                            onChange={e => setData(prev => ({...prev, name: e.target.value}))}  
                        />
                    </Col>
                    <Col>
                        <Input 
                            placeholder="Email Address"
                            value={data.email}
                            onChange={e => setData(prev => ({...prev, email: e.target.value}))}
                        />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Input 
                            placeholder="Phone Number" 
                            value={data.phone}
                            onChange={e => setData(prev => ({...prev, phone: e.target.value}))}
                        />
                    </Col>
                    <Col>
                        <DateComp
                            showTimeSelect 
                            selected={startDate}
                            onChange={(date: any) => {
                                setStartDate(date);
                                setData(prev => ({...prev, when: date.toString()}))
                            }}
                        />
                    </Col>
                </Row>
                <Terms>
                    <input 
                        checked={agree} 
                        type="checkbox" 
                        name="agree" 
                        id={styles.checkbox}
                        onChange={e => setAgree(prev => !prev)}
                    />
                    <Label htmlFor={styles.checkbox}>I agree to terms and conditions.</Label>
                </Terms>
                <Submit type="submit" value={isLoading ? 'Submiting...' : text} name="submit"  />
            </Form>
        </Card>
    )
}