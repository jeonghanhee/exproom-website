import styled from 'styled-components';

const Button = styled.button`
  margin-top: 20px;
  padding: 17.5px 50px;
  font-size: 2rem;
  background-color: #444;
  border: none;
  cursor: pointer;
  &:hover {
      background-color: #555;
  };
  @media (max-width: 768px) {
      font-size: 1rem;
      padding: 13.75px 30px;
  };
color: #8B8B8B;
`;

const Container = styled.div`
  position: relative;
  height: 100vh;
  color: #616161;
  overflow: hidden;
`;

const Content = styled.div`
  position: absolute;
  top: 47.5%;
  left: 10%;
  transform: translateY(-50%);
  text-align: left;
`;

const Subtitle = styled.p`
  margin: 15px 20px 15px 0px;
  font-size: 1.2rem;
  @media (max-width: 768px) {
      font-size: 1rem;
      margin: 10px 20px 10px 0px;
  };
`;

const Title = styled.h1`
  font-size: 6rem;
  margin: 0;
  @media (max-width: 768px) {
      font-size: 4rem;
  };
`;

const Footer = styled.div`
  margin: 15px; 0;
  position: absoulte;
  top: 0;
`

// Download
const RELEASE_ZIP_FILE_URL = './release/developing.txt';
const RELEASE_FILE_NAME = 'developing.txt';
const handleDownload = () => {
  const element = document.createElement('a');
  element.href = RELEASE_ZIP_FILE_URL;
  element.download = RELEASE_FILE_NAME;
  document.body.appendChild(element);
  element.click();
  document.body.removeChild(element);
};

const EXPROOM = () => {
  return (
    <Container>
      <Content>
        <Title className="drop-shadow-lg">EXPROOM</Title>
        <Subtitle className="drop-shadow-lg">
          A room that expands infinitely,
          <br />
          You have to find all the gifts and escape from
          <br />
          this place.
        </Subtitle>
        <Button onClick={handleDownload} className="drop-shadow-lg">Download</Button>
      </Content>
      <Footer>
        <p className="drop-shadow-xs flex flex-row justify-center items-center">Copyright 2024. tjertmkr all rights reserved.</p>
      </Footer>
    </Container>
  );
};

export default EXPROOM;
