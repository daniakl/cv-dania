"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";
import { cn } from "@/lib/utils";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { GoodreadsIcon, InstagramIcon } from "./Icon";

const cards = [
  {
    src: "/images/food.jpg",
    alt: "Cooking",
    className: "-rotate-6",
    hoverRotate: -3,
    enTitle: "whipping up something tasty 👩‍🍳",
    frTitle: "cusiner quelque chose de délicieux 👩‍🍳",
    href: "https://www.instagram.com/petitarbre/",
  },
  {
    src: "/images/film.jpg",
    alt: "Taking photos",
    className: "rotate-2",
    hoverRotate: -3,
    enTitle: "photographing the city 📸",
    frTitle: "photographier la ville 📸",
    href: "https://www.instagram.com/petitarbre/",
  },
  {
    src: "/images/book.jpg",
    alt: "Reading",
    className: "rotate-3",
    hoverRotate: 2,
    enTitle: "getting lost in a good book 📚",
    frTitle: "me perdre dans un bon livre 📚",
    href: "https://www.goodreads.com/",
  },
];

export function CardStack({ lang }: { lang: "en" | "fr" }) {
  const [lastHovered, setLastHovered] = useState<number>(0);
  const [isUserHovering, setIsUserHovering] = useState<boolean>(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const clearActiveTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
  };

  const startAutoSequence = () => {
    let currentIndex = 0;

    const cycleCards = () => {
      setLastHovered(currentIndex);
      currentIndex = (currentIndex + 1) % cards.length;
      timeoutRef.current = setTimeout(cycleCards, 3000);
    };

    cycleCards();
  };

  const handleHover = (index: number) => {
    setLastHovered(index);
    setIsUserHovering(true);
    clearActiveTimeout();

    // Start 3s timer to resume auto sequence
    timeoutRef.current = setTimeout(() => {
      setIsUserHovering(false);
      startAutoSequence();
    }, 3000);
  };

  // Initialize auto sequence and cleanup
  useEffect(() => {
    const initialTimeout = setTimeout(() => {
      if (!isUserHovering) {
        startAutoSequence();
      }
    }, 1000);

    return () => {
      clearTimeout(initialTimeout);
      clearActiveTimeout();
    };
  }, [isUserHovering]);

  // Stop auto sequence when user hovers
  useEffect(() => {
    if (isUserHovering) {
      clearActiveTimeout();
    }
  }, [isUserHovering]);

  return (
    <div className="relative space-y-4">
      <h2>
        <span className="opacity-60">
          {lang === "en"
            ? "When I'm not working, I'm..."
            : "Quand je ne travaille pas, je suis..."}
        </span>{" "}
        <span className="font-medium text-zinc-900">
          <AnimatePresence mode="wait">
            <motion.span
              key={lastHovered}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="inline-block"
            >
              {cards[lastHovered][`${lang}Title`]}
            </motion.span>
          </AnimatePresence>
        </span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 my-24 md:my-16 w-full place-items-center">
        {cards.map((card, index) => (
          <div
            key={card.alt}
            className="h-40 md:h-auto flex items-center justify-center"
          >
            <Link href={card.href} target="_blank">
              <motion.div
                className={cn(
                  "size-56 z-10 overflow-hidden rounded-lg flex-none p-2 bg-violet-200/80 drop-shadow-2xl backdrop-blur border border-white/40",
                  card.className
                )}
                animate={
                  lastHovered === index
                    ? {
                        scale: 1.05,
                        rotate: card.hoverRotate,
                        y: -10,
                      }
                    : {
                        scale: 1,
                        opacity: 1,
                        y: 0,
                      }
                }
                transition={{
                  type: "spring",
                  stiffness: 500,
                  damping: 25,
                }}
                whileHover={{
                  scale: 1.05,
                  rotate: card.hoverRotate,
                  y: -10,
                }}
                onHoverStart={() => handleHover(index)}
              >
                <Image
                  src={card.src}
                  alt={card.alt}
                  width={200}
                  height={200}
                  className="size-full object-cover"
                />
              </motion.div>
            </Link>
          </div>
        ))}
      </div>

      <div className="flex justify-center gap-8">
        <Link
          href="https://www.instagram.com/daniakl/"
          className="flex items-center gap-2 px-2 py-1 text-sm rounded-full text-zinc-600 hover:text-zinc-900 transition-colors"
        >
          <InstagramIcon className="size-4" />
          Instagram
        </Link>
        <Link
          href="https://www.goodreads.com/"
          className="flex items-center gap-2 px-2 py-1 text-sm rounded-full text-zinc-600 hover:text-zinc-900 transition-colors"
        >
          <GoodreadsIcon className="size-4" />
          Goodreads
        </Link>
      </div>
    </div>
  );
}
