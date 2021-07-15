import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

function ErrorPage() {
    return (<Container>
        <ErrorContainer>
            <span>4</span>
            <span><ScreenReader class="screen-reader-text">0</ScreenReader></span>
            <span>4</span>
        </ErrorContainer>
        <div>
            <ReturnLink to='/'>მთავარი გვერდი</ReturnLink>
        </div>
    </Container>
    )
}
const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`
const ErrorContainer = styled.div`
    text-align: center;
  font-size: 180px;
  font-family: 'Catamaran', sans-serif;
  font-weight: 800;
  margin: 20px 15px;
    span {
        display: inline-block;
        line-height: 0.7;
        position: relative;
        color: #FFB485;
        vertical-align: middle;
}
    span:nth-of-type(1) {
        color: #D1F2A5;
        animation: colordancing 4s infinite;
}
    span:nth-of-type(3) {
        color: #F56991;
        animation: colordancing2 4s infinite;
    }
    span:nth-of-type(2) {
        width: 120px;
        height: 120px;
        border-radius: 999px;

}
span:nth-of-type(2):before,
 span:nth-of-type(2):after {
	border-radius: 0%;
	content:"";
	position: absolute;
	top: 0; left: 0;
	width: inherit; height: inherit;
  border-radius: 999px;
	box-shadow: inset 30px 0 0 rgba(209, 242, 165, 0.4),
				inset 0 30px 0 rgba(239, 250, 180, 0.4),
				inset -30px 0 0 rgba(255, 196, 140, 0.4),	
				inset 0 -30px 0 rgba(245, 105, 145, 0.4);
  animation: shadowsdancing 4s infinite;
}
 span:nth-of-type(2):before {
	-webkit-transform: rotate(45deg);
	   -moz-transform: rotate(45deg);
			transform: rotate(45deg);
}


@keyframes shadowsdancing {
  0% {
    box-shadow: inset 30px 0 0 rgba(209, 242, 165, 0.4),
				inset 0 30px 0 rgba(239, 250, 180, 0.4),
				inset -30px 0 0 rgba(255, 196, 140, 0.4),	
				inset 0 -30px 0 rgba(245, 105, 145, 0.4);
  }
  25% {
    box-shadow: inset 30px 0 0 rgba(245, 105, 145, 0.4),
				inset 0 30px 0 rgba(209, 242, 165, 0.4),
				inset -30px 0 0 rgba(239, 250, 180, 0.4),	
				inset 0 -30px 0 rgba(255, 196, 140, 0.4);
  }
  50% {
     box-shadow: inset 30px 0 0 rgba(255, 196, 140, 0.4),
				inset 0 30px 0 rgba(245, 105, 145, 0.4),
				inset -30px 0 0 rgba(209, 242, 165, 0.4),	
				inset 0 -30px 0 rgba(239, 250, 180, 0.4);
  }
  75% {
   box-shadow: inset 30px 0 0 rgba(239, 250, 180, 0.4),
				inset 0 30px 0 rgba(255, 196, 140, 0.4),
				inset -30px 0 0 rgba(245, 105, 145, 0.4),	
				inset 0 -30px 0 rgba(209, 242, 165, 0.4);
  }
  100% {
    box-shadow: inset 30px 0 0 rgba(209, 242, 165, 0.4),
				inset 0 30px 0 rgba(239, 250, 180, 0.4),
				inset -30px 0 0 rgba(255, 196, 140, 0.4),	
				inset 0 -30px 0 rgba(245, 105, 145, 0.4);
  }
}
@keyframes colordancing {
  0% {
    color: #D1F2A5;
  }
  25% {
    color: #F56991;
  }
  50% {
    color: #FFC48C;
  }
  75% {
    color: #EFFAB4;
  }
  100% {
    color: #D1F2A5;
  }
}
@keyframes colordancing2 {
  0% {
    color: #FFC48C;
  }
  25% {
    color: #EFFAB4;
  }
  50% {
    color: #D1F2A5;
  }
  75% {
    color: #F56991;
  }
  100% {
    color: #FFC48C;
  }
}


`
const ScreenReader = styled.span`
    position: absolute;
    top: -9999em;
    left: -9999em;
`
const ReturnLink = styled(Link)`
    text-decoration: none;
    font-size: 1.3rem;
    letter-spacing: 0.04rem;
    color: #32a852;
`
export default ErrorPage
