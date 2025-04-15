import styled from "styled-components";

export default function NewClass() {
  function handleSubmit(formData: any) {
    const title = formData.get("class-title");
    alert("Create new class " + title);
  }

  return (
    <PageWrapper>
      <h1>Add new class</h1>
      <form action={handleSubmit}>
        <div>
          <label htmlFor="class-title">Class Name</label>
          <br />
          <input type="text" name="class-title" id="class-title" />
        </div>
        <div>
          <label htmlFor="class-subtitle">Class Subtitle</label>
          <br />
          <input type="text" name="class-subtitle" id="class-subtitle" />
        </div>
        <div>
          <label htmlFor="class-description">Class Description</label>
          <br />
          <textarea name="class-description" id="class-description"></textarea>
        </div>
        <button>Create</button>
      </form>
    </PageWrapper>
  );
}

const PageWrapper = styled.div`
  padding: 20px;
`;
