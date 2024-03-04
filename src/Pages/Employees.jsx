import { React,useState} from 'react';
import { employees } from '../Assets/employees.js';
import Profile from "../Assets/Group 46.png";
import Logo from "../Assets/moptro logo.png";
import { AiFillHome } from "react-icons/ai";
import { FaUser } from "react-icons/fa";
import { IoSearchSharp } from "react-icons/io5";
import { Link } from "react-router-dom";

const Employees = () => {
    const [emp, setEmp] = useState([]);
    const [name, setName] = useState("");
    const handleSearch = (e) => {
        e.preventDefault();
        console.log(employees);
        const newEmp = employees.filter((emp) => emp.Name.toLowerCase() == name.toLowerCase());
        setEmp(newEmp);
        setName("");
    }
    console.log(emp);
    console.log(name);
  return (
    <>
      <div className="employees">
        <div className="profile">
          <img src={Profile} alt="profile" />
        </div>
        <div className="logo">
          <img src={Logo} alt="logo" />
          <div className="float">
            <p className="text-float">4</p>
          </div>
        </div>
        <div>
          <div className="search_box">
            <input
              type="text"
              placeholder="Search with name"
              onChange={(e) => setName(e.target.value)}
              value={name}
            />
            <button onClick={(e) => handleSearch(e)}>
              <IoSearchSharp className="search" />
            </button>
          </div>
          <div className="list">
            {emp.length > 0
              ? emp.map((emp, index) => {
                  const { EMP_ID, Name, DOB, Role } = emp;
                  return (
                    <>
                      <div
                        className={
                          index % 2 ? "list-item alter_element" : "list-item"
                        }
                      >
                        <div className="inner_flex">
                          <div className="inner_flex2">
                            <p className="left">EMP ID</p>
                            <p className="center">:</p>
                          </div>
                          <p className="right">{EMP_ID}</p>
                        </div>
                        <div className="inner_flex">
                          <div className="inner_flex2">
                            <p className="left">Name</p>
                            <p className="center">:</p>
                          </div>
                          <p className="right">{Name}</p>
                        </div>
                        <div className="inner_flex">
                          <div className="inner_flex2">
                            <p className="left">DOB</p>
                            <p className="center">:</p>
                          </div>
                          <p className="right dob">{DOB}</p>
                        </div>
                        <div className="inner_flex">
                          <div className="inner_flex2">
                            <p className="left">Role</p>
                            <p className="center">:</p>
                          </div>
                          <p className="right role">{Role}</p>
                        </div>
                        <div className='absolute'>{EMP_ID}</div>
                      </div>
                    </>
                  );
                })
              : employees.map((employee, index) => {
                  const { EMP_ID, Name, DOB, Role } = employee;
                  return (
                    <>
                      <div
                        className={
                          index % 2 ? "list-item alter_element" : "list-item"
                        }
                      >
                        <div className="inner_flex">
                          <div className="inner_flex2">
                            <p className="left">EMP ID</p>
                            <p className="center">:</p>
                          </div>
                          <p className="right">{EMP_ID}</p>
                        </div>
                        <div className="inner_flex">
                          <div className="inner_flex2">
                            <p className="left">Name</p>
                            <p className="center">:</p>
                          </div>
                          <p className="right">{Name}</p>
                        </div>
                        <div className="inner_flex">
                          <div className="inner_flex2">
                            <p className="left">DOB</p>
                            <p className="center">:</p>
                          </div>
                          <p className="right dob">{DOB}</p>
                        </div>
                        <div className="inner_flex">
                          <div className="inner_flex2">
                            <p className="left">Role</p>
                            <p className="center">:</p>
                          </div>
                          <p className="right role">{Role}</p>
                        </div>
                        <div className="absolute">{EMP_ID}</div>
                      </div>
                    </>
                  );
                })}
          </div>
        </div>
      </div>
      <div className="flex2">
        <Link className="simple_flex" to="/home">
          <AiFillHome className="nav-logos" />
        </Link>
        <Link className="simple_flex nav-selection" to="/employees">
          <FaUser className="nav-logos" />
        </Link>
      </div>
    </>
  );
}

export default Employees