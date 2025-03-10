import { Form, Input } from "./styled";

export const SearchBar = () => {
  return (
    <>
      <Form>
        <Input
          name="search-submit"
          type="search"
          placeholder="Find what you like"
        />
      </Form>
    </>
  );
};
