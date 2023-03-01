import React from "react";
import styled from "styled-components";
import axios from "axios";
import { useStateProvider } from "../utils/StateProvider";
import { useEffect } from "react";
import { reducerCases } from "../utils/Constants";

export default function CurrentlyPlaying() {
    const [{ token, track }, dispatch] = useStateProvider();

    useEffect(() => {
        const getTrack = async () => {
            const response = await axios.get("https://api.spotify.com/v1/tracks/10nyNJ6zNy2YVYLrcwLccB",
            {
                headers: {
                  "Content-Type": "application/json",
                  Authorization: "Bearer " + token,
                },
              });
            
                const track = {
                  id: response.data.id,
                  name: response.data.name,
                  artists: response.data.artists.map((artist) => artist.name),
                  image: response.data.album.images[2].url,
                };
                console.log(track);

                dispatch({ type: reducerCases.SET_PLAYING, track });

            };
        getTrack();
    }, [token, dispatch]);

    return (<Container>
        {track && (
          <div className="track">
            <div className="track_image">
              <img src={track.image} alt="currentPlaying" />
            </div>
            <div className="track_info">
              <h4 className="track_info_track_name">{track.name}</h4>
              <h6 className="track_info_track_artists">
                {track.artists.join(", ")}
              </h6>
            </div>
          </div>
        )}
      </Container>)
};

const Container = styled.div `
.track {
    display: flex;
    align-items: center;
    gap: 1rem;
    &_image {
    }
    &_info {
      display: flex;
      flex-direction: column;
      gap: 0.3rem;
      &_track_name {
        color: white;
      }
      &_track_artists {
        color: #b3b3b3;
      }
    }
  }
`;