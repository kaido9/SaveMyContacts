import React, { useContext, useRef, useEffect } from "react";
import Context from "../Context/Context/Context";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";

const ContactFilter = () => {
  const context = useContext(Context);
  const { filterContacts, clearFilter, filtered } = context;
  const text = useRef("");
  useEffect(() => {
    if (filtered === null) text.current.value = "";
  }, []);
  const onChange = e => {
    if (text.current.value !== "") {
      filterContacts(e.target.value);
    } else {
      clearFilter();
    }
  };
  return (
    <form autoComplete="off" onSubmit={e => e.preventDefault()}>
      <FormControl className="inputClass" fullWidth>
        <InputLabel htmlFor="filter">Type Here To Search ...</InputLabel>
        <Input
          id="filter"
          type="text"
          inputRef={text}
          onChange={onChange}
        />
      </FormControl>
    </form>
  );
};

export default ContactFilter;
