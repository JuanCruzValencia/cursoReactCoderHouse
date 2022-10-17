import { Form, Button, InputGroup } from "react-bootstrap";
import { BiSearch } from "react-icons/bi";
import './SearchBar.css'

function SearchBar() {
  return (
    <InputGroup className="">
      <Form.Control
        placeholder="Que estas buscando?"
        //   aria-label="Recipient's username"
        //   aria-describedby="basic-addon2"
      />
      <Button className="searchBar__btn" id="button-addon2">
        <BiSearch />
      </Button>
    </InputGroup>
  );
}

export default SearchBar;
