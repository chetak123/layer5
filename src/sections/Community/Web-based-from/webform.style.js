import styled from "styled-components";

const Webform = styled.div`
  
  .timeline {
    list-style-type: none;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 50px 0;
  }
  
  .li {
    transition: all 200ms ease-in;
  }
  
  .timestamp {
    margin-bottom: 20px;
    padding: 0px 40px;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-weight: 100;
  }
  
  .status {
    padding: 0px 40px;
    display: flex;
    justify-content: center;
    border-top: 5px solid #EFEFEF;
    position: relative;
    transition: all 200ms ease-in;
  }
  .status:before {
    content: "";
    width: 25px;
    height: 25px;
    background-color: white;
    border-radius: 25px;
    border: 5px solid #EFEFEF;
    position: absolute;
    top: -15px;
    left: 42%;
    transition: all 200ms ease-in;
  }

  .li.active .status::before {
    border-color: #00B39F;
  }

  .li.complete .status,
  .li.active .status {
    border-top: 5px solid #00B39F;
  }
  .li.complete .status:before {
    background-color: #00B39F;
    border: none;
    transition: all 200ms ease-in;
  }
  .li.complete .status h4 {
    color: #66DC71;
  }

  .required-sign {
    color: #8b0000;
  }

  .checkbox-label {
    font-size: .8rem;
  }
  
  @media (min-width: 320px) and (max-width: 700px) {
    .status {
      border-top: 3px solid #EFEFEF;
      padding: 0px 25px;
    }
    .status:before {
      content: "";
      width: 20px;
      height: 20px;
      border-radius: 20px;
      border: 3px solid #EFEFEF;
      top: -12px;
      left: -10%
    }
  }

    .title {
        font-weight: 700;
        margin: 70px 0px 10px 0px;
    }

    .para {
        color: #777777;
    }
    .label {
      font-size: 1rem;
    }

    .container-1 {
      margin: 40px 0;
      
      .text {
        margin: 80px 0;
      }
    }

    .btn-prev1 {
      float: right;
      margin: 20px 0;
      background-color: white; 
      border: none;
      color: #828C8C;
      padding: 12px 15px;
      font-size: 16px;
      cursor: pointer;
      margin: 0 5px;

      .back {
        font-size: 20px;
      }
    }

    .btn-prev1:hover {
      transition: all 200ms ease-in;
      color: #00B39F;
    }

    .form {
        margin 40px 40px;

        .form-name {
            font-weight: 600;
            margin: 20px 0px 5px 3px;
            display: block;
        }

        .text-field {
            width: 100%;
            border: 1px solid black;
            border-radius: 10px;
            padding: 1rem .5rem;
            font-size: 1rem;
        }

        .form-select {
            width: 150px;
            border: 1px solid black;
            border-radius: 10px;
            padding: 1rem .5rem;
        }

        .upload-field {
            width: 100%;
            border: 1px dashed black;
            border-radius: 15px;
            height: 50px;
            padding: 12px;
        }

        .form-check {
          width: 20px;
          height: 20px;
          border-radius: 15px;
          margin: 2px 10px !important;
        }

        .btn {
          float: right;
          margin: 20px 0;
        }

      }
      .btn-wrapper {
        float: right;
        width: 350px;

        .btn-next {
          float: left;
        }

        button.btn-prev {
          background-color: white; 
          border: none;
          color: #828C8C;
          float: left;
          padding: 12px 15px;
          font-size: 16px;
          cursor: pointer;
          margin: 0 5px;

          .back {
            font-size: 20px;
          }
        }

        .btn-prev:hover {
          transition: all 200ms ease-in;
          color: #00B39F;
        }
      }

    .center {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;
        margin: 70px;
    }

    .option {
        cursor: pointer;
        flex: 1 1 160px;
        height: 200px;
        border-radius: 15px;
        border: 1px solid  #00B39F;
        background-color: rgba(0,179,159, .2);
        color: #00B39F;
        margin: 10px 5px;
        max-width: 250px;
        text-align: center;
        padding-top: 85px; 
        transition: background 200ms ease-in;
      }
      .option:hover{
        color: white;
        background-color: #00B39F;
    }

    .black-box {
      margin: auto;
      width: auto;
      padding: 20px;
      min-height: 400px;
      margin: 3rem 13%;
      background-color: #1E2117;

      h2{
        padding-top: 60px;
        color: white;
        font-size: 2rem;
        font-weight: 700;
        text-align: center;
      }

      p {
        padding-top: 10px;
        color: white;
        text-align: center;
      }

      .btn-box {
        width: 55%;
        margin: auto;

        .btn-one {
          color: white;
          margin: 10px;
        }

        .btn-two {
          margin: 10px;
        }

        .btn-one:hover {
          color: #111111;
        }
      }

      @media only screen and (max-width: 600px) {
        .btn-box {
          width: 100%;
        }
      }
    }
`;

export default Webform;
