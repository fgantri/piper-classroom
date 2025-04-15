import { Link } from "react-router-dom";
import styled from "styled-components";
import useSWR from "swr";

const ENDPOINT = "http://localhost:8080/api/classroom";

interface Time {
  hours: number;
  minutes: number;
}

interface ClassCard {
  id: string;
  poster: string;
  sessionCount: number;
  title: string;
  slug: string;
  subtitle: string;
  teacherName: string;
  duration: Time;
}

async function fetcher(endpoint: URL): Promise<ClassCard[]> {
  const data: ClassCard[] = await new Promise((resolve, reject) => {
    setTimeout(() => {
      const data: ClassCard[] = [
        {
          id: "0",
          poster:
            "https://d3kfvpfexuy5fk.cloudfront.net/_static/assets/artwork/joseph/class-the-story-of-joseph-square.jpg",
          sessionCount: 29,
          title: "Joseph",
          slug: "joseph",
          subtitle: "Genesis 37:2-50:26",
          teacherName: "Dr. Tim Mackie",
          duration: {
            hours: 16,
            minutes: 41,
          },
        },
        {
          id: "1",
          poster:
            "https://d3kfvpfexuy5fk.cloudfront.net/_static/assets/artwork/jacob/class-jacob-square.jpg",
          sessionCount: 29,
          title: "Jacob",
          slug: "jacob",
          subtitle: "Genesis 25:19-37:1",
          teacherName: "Dr. Tim Mackie",
          duration: {
            hours: 16,
            minutes: 35,
          },
        },
      ];
      resolve(data);
    }, 2000);
  });
  return data;
}

function ClassCard({
  poster,
  sessionCount,
  title,
  slug,
  subtitle,
  teacherName,
  duration: { hours, minutes },
}: ClassCard) {
  return (
    <ClassCardWrapper>
      <Link to={`${slug}`} style={{ display: "block", cursor: "pointer" }}>
        <ArtworkWrapper>
          <Artwork src={poster} alt="" />
        </ArtworkWrapper>
        <div>{sessionCount} sessions</div>
        <h2>{title}</h2>
        <div>{subtitle}</div>
        <div>{teacherName}</div>
        <time>
          {hours} Hours {minutes} Minutes
        </time>
      </Link>
    </ClassCardWrapper>
  );
}

const ClassCardWrapper = styled.li`
  min-width: 300px;
  list-style-type: none;
  a {
    color: inherit;
    text-decoration: none;
  }
`;

const ArtworkWrapper = styled.div`
  margin-left: calc(-1 * var(--vertical-padding));
  width: calc(100% + var(--vertical-padding) * 2);
  height: 200px;
  border-radius: 5px;
  overflow: clip;
`;

const Artwork = styled.img`
  width: 100%;
  object-fit: contain;
  object-position: 0% 50%;
`;

export default function Classroom() {
  const {
    data: classes,
    isLoading,
    error,
  } = useSWR<ClassCard[]>(ENDPOINT, fetcher);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error || typeof classes === "undefined") {
    <p>Something went wrong</p>;
  }

  return (
    <PageWrapper>
      <h1>Piper Classroom</h1>
      <ClassroomCardList>
        {classes!.map((_class) => (
          <ClassCard {..._class} />
        ))}
      </ClassroomCardList>
      <AddButton to="new">New Class</AddButton>
    </PageWrapper>
  );
}

const AddButton = styled(Link)`
  position: fixed;
  top: 20px;
  right: 20px;
`;

const PageWrapper = styled.div`
  padding: 20px;
  h1 {
    margin-bottom: 20px;
  }
`;

const ClassroomCardList = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(min(320px, 25%), 1fr));
  column-gap: 32px;
  row-gap: 48px;
`;
