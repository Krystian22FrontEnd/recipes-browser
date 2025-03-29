import { Form, Input, LoopIcon } from "./styled";

export const SearchBar = () => {
  return (
    <>
      <Form>
        <Input
          name="search-submit"
          type="search"
          placeholder="Find what you like"
        />
        <LoopIcon />
      </Form>
    </>
  );
};
