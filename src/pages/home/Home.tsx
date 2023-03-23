import { Map } from "../../components";

export const Home = () => {
  return (
    <Map
      places={[
        {
          id: "1",
          name: "London",
          slug: "london",
          location: {
            latitude: 51.505,
            longitude: -0.09,
          },
        },
      ]}
    />
  );
};
