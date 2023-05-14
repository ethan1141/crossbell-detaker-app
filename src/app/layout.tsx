"use client";
import "./globals.css";

import React from "react";
import { ConnectButton } from "@crossbell/connect-kit";
import { extractCharacterName } from "@crossbell/util-metadata";

import { Providers } from "./providers";
import BNavbar from "@/components/Navbar";
import { links } from "../../metadata";
import { Button, Col, Row } from "react-bootstrap";
import { useAccountCharacter } from "@crossbell/connect-kit";
import { CharacterAvatar } from "@crossbell/ui";

export default function RootLayout({ children }: React.PropsWithChildren) {
  const character = useAccountCharacter();
  return (
    <html lang="en">
      <head>
        <title>Detasker</title>
        <meta
          name="description"
          content="Detasker is an innovative online marketplace connecting people with professional services. Our platform uses artificial intelligence to match users with the right professionals for any task. Post a job, browse listings, and hire with confidence - Detasker makes task management easy and hassle-free. Join today and experience the future of freelance services."
        ></meta>
        <link href="/favicon.ico" rel="icon" />
      </head>
      <body>
        <Providers>
          <BNavbar links={links} />
          <Row className="my-3">
            <Col>
              <div className="mx-auto d-flex" style={{ width: "fit-Content" }}>
                <ConnectButton>
                  {(status, { connect, selectCharacters }) => {
                    if (status.isConnected) {
                      const { character } = status.account;
                      const displayName =
                        extractCharacterName(character) ??
                        status.displayAddress;

                      return (
                        <Button onClick={selectCharacters}>
                          <CharacterAvatar size="24px" character={character} />
                          {" " + displayName}
                        </Button>
                      );
                    } else {
                      return <div> </div>;
                    }
                  }}
                </ConnectButton>
              </div>
            </Col>
          </Row>
          {children}
        </Providers>
      </body>
    </html>
  );
}
