import { FunctionComponent } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux";
import { Point, Route } from "../../redux/types/routesTypes";

interface Props {

}

const RoutesList: FunctionComponent<Props> = () => {
  const { routesList } = useSelector(({ routes }: RootState) => routes)
  return (
    <div>
      {
        // TODO: add indexes for elements of list
        routesList.map((route: Route) => {
          return (
            <div>
              <div>{route.title}</div>
              {
                route.points.map((point: Point) => {
                  return (
                    <>
                      <div>{point.title}</div>
                      <div>{point.description}</div>
                    </>
                  )
                })
              }
            </div>
          )
        })
      }
    </div>
   );
}

export default RoutesList;
