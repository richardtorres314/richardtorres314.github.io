"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/ui/card";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from "@/ui/dropdown-menu";
import { MouseEvent, useState } from "react";

import { Badge } from "@/ui/badge";
import { Button } from "@/ui/button";
import { ChevronDown } from "lucide-react";
import posts from "./posts.json";

export function Posts() {
  const [tags, setTags] = useState<string[]>([]);

  const postTags = Array.from(
    new Set(
      posts.reduce((acc, curr) => {
        acc.push(...curr.tags);
        return acc;
      }, [] as string[])
    )
  ).sort((a, b) => (a < b ? -1 : 1));

  const handleTagSelect = (event: MouseEvent, tag: string) => {
    event.preventDefault();
    setTags((tags) => {
      if (tags.includes(tag)) {
        return tags.filter((currTag) => currTag !== tag);
      }

      return [...tags, tag];
    });
  };

  return (
    <>
      <div className="mb-2 flex justify-end">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline">
              Filter <ChevronDown className="ml-1 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel
              className="cursor-pointer pl-8"
              onClick={() => setTags([])}
            >
              Clear All
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            {postTags.map((tag) => (
              <DropdownMenuCheckboxItem
                key={tag}
                checked={tags.includes(tag) ? true : false}
                onClick={(e) => handleTagSelect(e, tag)}
                className="cursor-pointer"
              >
                {tag}
              </DropdownMenuCheckboxItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <ul>
        {posts
          .sort((a, b) => (a.date > b.date ? 1 : -1))
          .filter((post) =>
            tags.length ? post.tags.some((tag) => tags.includes(tag)) : true
          )
          .map((post) => (
            <li key={post.url} className="mb-4 print:break-inside-avoid">
              <a href={post.url} rel="noreferrer" target="_blank">
                <Card className="hover:bg-card-foreground/5">
                  <CardHeader>
                    <CardTitle>{post.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.tags.map((tag, index) => (
                        <Badge key={`${tag}-${index}`}>{tag}</Badge>
                      ))}
                    </div>
                    <p className="mb-2">{post.description}</p>
                    <div className="text-sm">{post.date}</div>
                  </CardContent>
                </Card>
              </a>
            </li>
          ))}
      </ul>
    </>
  );
}
