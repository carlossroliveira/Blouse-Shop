// -------------------------------------------------
// Packages
// -------------------------------------------------
import styled from 'styled-components';

export const ContainerSC = styled.section`
  .container {
    /*width: 100%;
			max-width: 1024px;
			padding: 20px;
			margin: auto;*/
    width: 100%;
    height: 100%;
    max-width: max-content;
    display: flex;
    align-items: center;
    margin: auto;
  }
  .text-field-filled,
  .text-field-outlined {
    height: 60px;
  }
  .text-field-filled {
    border-radius: 5px;
    background-color: #f1f1f1;
    width: 250px;
    position: relative;
    transition: 150ms ease;
    margin-right: 10px;
  }
  .text-field-filled::before {
    content: '';
    display: block;
    background-color: #005293;
    position: absolute;
    height: 2px;
    width: 0%;
    left: 50%;
    bottom: 0;
    transition: 150ms ease;
    opacity: 0;
  }
  .text-field-filled:focus-within::before {
    content: '';
    display: block;
    background-color: #6200ee;
    position: absolute;
    height: 2px;
    width: 100%;
    left: 0;
    bottom: 0;
    opacity: 1;
  }
  .text-field-filled:hover,
  .text-field-filled > input:focus {
    background-color: #0000001a;
  }
  .text-field-filled > input {
    outline: none;
    border-radius: 5px;
    padding: 30px 10px 10px 15px;
    background: none;
    position: relative;
    border: none;
    width: 100%;
  }
  .text-field-filled > span {
    color: #000000ad;
    font-size: 1rem;
    transition: all 0.15s cubic-bezier(0.4, 0, 0.2, 1);
    position: absolute;
    left: 15px;
    top: 0;
    bottom: 0;
    margin: auto;
    height: 5px;
    line-height: 1px;
    pointer-events: none;
  }
  .text-field-filled > input:focus ~ span,
  .text-field-filled > input:valid ~ span {
    color: #6200ee;
    font-size: 12px;
    transform: translateY(-12px);
  }
  /* Text Field Outlined */
  .text-field-outlined {
    border-radius: 5px;
    border: 1px solid #6200ee;
    width: 250px;
    position: relative;
    transition: 150ms ease;
  }
  .text-field-outlined:focus-within {
    border-width: 2px;
  }
  .text-field-outlined > input {
    outline: none;
    padding: 20px 10px 20px 15px;
    background: none;
    position: relative;
    border: none;
    width: 100%;
  }
  .text-field-outlined > span {
    color: #000000ad;
    font-size: 1rem;
    transition: all 0.15s cubic-bezier(0.4, 0, 0.2, 1);
    position: absolute;
    left: 15px;
    top: 0;
    bottom: 0;
    margin: auto;
    height: 5px;
    line-height: 1px;
    pointer-events: none;
  }
  .text-field-outlined > input:focus ~ span,
  .text-field-outlined > input:valid ~ span {
    color: #6200ee;
    background-color: #fff;
    font-size: 12px;
    transform: translateY(-29px);
    padding: 0 5px;
  }
`;

/* export const InputSC = styled.input`
  font-size: 1rem;
`;

export const InputSC = styled.span`
  font-size: 1rem;
`;
 */
