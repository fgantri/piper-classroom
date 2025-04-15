import { useParams, Link } from "react-router-dom";
import styled from "styled-components";

export default function Class() {
  const { id } = useParams();

  return (
    <PageWrapper>
      <h1>Class {id}</h1>
      <Link to="/classroom">Go Back</Link>
    </PageWrapper>
  );
}

const PageWrapper = styled.div`
  padding: 20px;
`;
