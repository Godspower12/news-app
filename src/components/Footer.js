import styled from 'styled-components';
const Footer = () => {
    return (
        <FooterStyle>
         <FooterContainer>
          <div className="letUs">
              <h5>Let Us help You</h5>
              <p>Help center</p>
              
              </div> 
          <div className="AboutAppleMart">
              <h5>About us</h5>
              <p>News Center</p>
              <p></p>
              <p>Terms and conditions</p>
              <p>Privacy and cookie notice</p>
              </div> 
          <div className="makeMoney">
              <h5>Eye Witness</h5>
              <p>Report happening events</p>
              <p>Find out how</p>
              </div> 
        
        <div className="connect">
            <div className="joinUs-Socially">
            <h5>Connect with Us On</h5>
            <i class="fa fa-facebook" aria-hidden="true"></i>
            <i class="fa fa-twitter-square" aria-hidden="true"></i>
            <i class="fa fa-instagram" aria-hidden="true"></i>
            <i class="fa fa-google-plus-square" aria-hidden="true"></i>
            </div>
            
            </div>
            </FooterContainer>
        </FooterStyle>
    )
}


const FooterStyle = styled.div`
background: black;
color: white;
 padding: '10px';
 margin-bottom: -10px;
 
 
    `;
const FooterContainer = styled.div`
    display: flex;
    justify-content: space-around;
        
    h5, p {
        color: grey;
        cursor: pointer;
        :hover {
        color: white;
         }
    }
    @media(max-width: 425px) {
        padding: 10px 0px;
        h5 {
        font-size: 10px;
       }
        p {
        display: none;
       }

    @media(max-width: 375px) {
       padding: 10px 0px;
        h5 {
        font-size: 10px;
       }
        display:flex;
        flex-wrap: wrap;
        p {
        display: none;
       }
    
}


    `;



export default Footer;
