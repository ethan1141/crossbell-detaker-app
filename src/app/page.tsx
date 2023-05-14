"use client";
import React, { useState } from "react";

import { Header } from "@/components/header";
import { Connection } from "@/components/connection";
import { Col, Container, Row } from "react-bootstrap";
import { metadata } from "../../metadata";

export default function IndexPage() {
  const [addUser, setAddUser] = useState<boolean>(false);
  const [job, setJobs] = useState(-1);
  const [freelancers, setFreelancers] = useState(-1);
  const [userCount, setUserCount] = useState(-1);
  return (
    <main>
      <Container>
        <Row>
          <Col md>
            <h1>Detasker</h1>
            <h5>{metadata.slogan}</h5>
          </Col>
        </Row>
        <Row>
          <Col md>
            <p>
              Welcome to Detasker - the innovative online marketplace connecting
              people with professional services. Our platform uses cutting-edge
              technology to make task management easy and hassle-free. With
              Detasker, you can post a job, browse listings, and hire with
              confidence.
            </p>
          </Col>
        </Row>
        <Row>
          <Col md>
            <h2>Users: {userCount != -1 ? userCount : "Loading..."}</h2>
          </Col>
          <Col md>
            <h2>Jobs: {job != -1 ? job : "Loading..."}</h2>
          </Col>
          <Col md>
            <h2>
              Freelancers: {freelancers != -1 ? freelancers : "Loading..."}
            </h2>
          </Col>
        </Row>
        {/* <div>
        {isDisconnected ? (
          <div>
            <p>You are disconnected</p>
          </div>
        ) : profile.id.toNumber() === 0 ? (
          <div>
            <Modal
              show={addUser}
              config={{
                title: "Create a new user",
                before: (
                  <div>
                    <CreateProfile />
                  </div>
                ),
                buttons: [
                  {
                    text: "Add user",
                    onClick() {
                      detasker!
                        .createUser(
                          "0x81e70AAF7475AabA6D919e3A889b6D94C792c8A3",
                          new NewProfile() as unknown as Detasker.NewProfileStruct,
                          {
                            gasLimit: 250000,
                          }
                        )
                        .catch((error) => {
                          console.log(error);
                        });
                    },
                  },
                ],
              }}
              onHide={() => setAddUser(false)}
            />
            <Button onClick={() => setAddUser(true)}>Create a user</Button>
          </div>
        ) : (
          <div>
            <h5>
              Welcome back, {profile.name !== "" ? profile.name : "(no name)"}
            </h5>
          </div>
        )}
      </div> */}
      </Container>
    </main>
  );
}
