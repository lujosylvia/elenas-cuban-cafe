import React, { useState } from "react";
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
import { DatabaseCategories } from "../services/firestore/Categories";
import MenuCategories from "../components/Menu/MenuCategories/MenuCategories";

const AnimatedRouter = () => {
    let location = useLocation();

    const [category, setCategory] = useState<DatabaseCategories | null>(null);
  
    return (
        <div style={{ padding: "2rem", paddingTop: "5rem"}}>
          <TransitionGroup>
            {/*
              This is no different than other usage of
              <CSSTransition>, just make sure to pass
              `location` to `Switch` so it can match
              the old location as it animates out.
            */}
              <Routes location={location}>
                  <Route path="/" element={<MenuCategories setCategory={setCategory} />} />
                  <Route path="/menu" element={<MenuCategories setCategory={setCategory} />} />
                  <Route path="/menu/:category" element={<Menu category={category} />} />
                  <Route path="/location" element={<Location />} />
                  <Route path="/order-now" element={<OrderNow />} />
              </Routes>
          </TransitionGroup>
        </div>
    );
  }

  export default AnimatedRouter;