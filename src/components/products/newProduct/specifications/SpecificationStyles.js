import { Field } from 'redux-form'
import styled from 'styled-components'

export const Container = styled.div`
    width: 60%;
    margin-top: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    div{
        display: flex;
        width: 80%;
        justify-content: space-between;
    }
`
export const TextField = styled(Field)`
    
`