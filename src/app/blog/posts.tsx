"use client";

import { Fade } from "react-awesome-reveal";
import { Section } from "@/ui/section/section";
import classNames from "classnames";
import posts from "@/data/posts.json";
import styles from "./posts.module.scss";

export default function BlogPosts() {
  return (
    <Fade duration={1500}>
      <Section>
        <div className="container">
          <h1 className="title">Blog Posts</h1>
          <ul>
            {posts.map((post) => (
              <li key={post.url} className="mb-4">
                <div className={classNames("card", styles.card)}>
                  <a href={post.url} rel="noreferrer" target="_blank">
                    <div className="card-content">
                      <p className="title is-4">{post.title}</p>
                      <div className="tags">
                        {post.tags.map((tag, index) => (
                          <div key={`${tag}-${index}`} className="tag">
                            {tag}
                          </div>
                        ))}
                      </div>
                      <div>{post.date}</div>
                    </div>
                  </a>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </Section>
    </Fade>
  );
}
