import React from 'react';
import "../Home/Home.css"
import { Parallax } from 'react-parallax';
import Button from "@mui/material/Button";
import Navbar from "../Navbar/Navbar";

const Home = () => {
  return (
      <>
          <Navbar/>
          <div className="scroll-container">
              <div className="scroll-area">
                  <Parallax className='image'
                            blur={0}
                            bgImage={"https://tesla-cdn.thron.com/delivery/public/image/tesla/e90a341e-f9ca-4aa1-8eab-94afea118786/bvlatuR/std/2880x1800/M3-Homepage-D"}
                            strength={500}
                            bgImageStyle={{minHeight:"100vh"}}
                  >
                      <div className='content1'>
                          <div>
                              <h6>Model 3</h6>
                              <p>Order Online for <span className="active">Touchless Delivery</span></p>
                          </div>

                          <div className="btn-home">
                              <Button variant="contained" sx = {{borderRadius:50, backgroundColor: "#3a3d42", py:1, px:10,}}>Custom Order</Button>
                              <Button variant="contained" sx = {{borderRadius:50,backgroundColor: "#e6e6e5", color:"#3a3d42", py:1, px:10,ml:4}}>Existing Inventory</Button>
                          </div>
                      </div>
                  </Parallax>
              </div>
              <div className="scroll-area">
                  <Parallax className='image'
                            blur={0}
                            bgImage={"https://tesla-cdn.thron.com/delivery/public/image/tesla/325743a2-d187-4e28-91a3-5a2e47e317f7/bvlatuR/std/2880x1800/ModelX-Homepage-D"}
                            strength={500}
                            bgImageStyle={{minHeight:"100vh"}}
                  >
                      <div className='content1'>
                          <div>
                              <h6>Model 3</h6>
                              <p>Order Online for <span className="active">Touchless Delivery</span></p>
                          </div>

                          <div className="btn-home">
                              <Button variant="contained" sx = {{borderRadius:50, backgroundColor: "#3a3d42", py:1, px:10,}}>Custom Order</Button>
                              <Button variant="contained" sx = {{borderRadius:50,backgroundColor: "#e6e6e5", color:"#3a3d42", py:1, px:10,ml:4}}>Existing Inventory</Button>
                          </div>
                      </div>

                  </Parallax>
              </div>

              <div className="scroll-area">
                  <Parallax className='image'
                            blur={0}
                            bgImage={"https://tesla-cdn.thron.com/delivery/public/image/tesla/32e5e0f3-5c04-42ef-8f8f-c6b1c26f8a9e/bvlatuR/std/2880x1800/ms-main-hero-desktop"}
                            strength={500}
                            bgImageStyle={{minHeight:"100vh"}}
                  >
                      <div className='content1'>
                          <div>
                              <h6>Model 3</h6>
                              <p>Order Online for <span className="active">Touchless Delivery</span></p>
                          </div>

                          <div className="btn-home">
                              <Button variant="contained" sx = {{borderRadius:50, backgroundColor: "#3a3d42", py:1, px:10,}}>Custom Order</Button>
                              <Button variant="contained" sx = {{borderRadius:50,backgroundColor: "#e6e6e5", color:"#3a3d42", py:1, px:10,ml:4}}>Existing Inventory</Button>
                          </div>
                      </div>
                  </Parallax>
              </div>
          </div>
      </>
  );
};

export default Home;