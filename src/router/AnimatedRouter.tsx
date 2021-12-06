import React from "react";
import {
    TransitionGroup,
    CSSTransition
  } from "react-transition-group";
  import {
    Routes,
    Route,
    Link,
    useLocation,
    useParams
  } from "react-router-dom";
import { Menu } from "../components/Menu/Menu";
import { Location } from "../components/Location/Location";
import { OrderNow } from "../components/OrderNow/OrderNow";

const AnimatedRouter = () => {
    let location = useLocation();
  
    return (
        <div>
          <TransitionGroup>
            {/*
              This is no different than other usage of
              <CSSTransition>, just make sure to pass
              `location` to `Switch` so it can match
              the old location as it animates out.
            */}
              <Routes location={location}>
                  <Route path="menu" element={<Menu />} />
                  <Route path="location" element={<Location />} />
                  <Route path="order-now" element={<OrderNow />} />
              </Routes>
          </TransitionGroup>
        </div>
    );
  }

  export default AnimatedRouter;