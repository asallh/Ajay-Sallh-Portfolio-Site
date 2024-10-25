/* eslint-disable @typescript-eslint/no-empty-object-type */
"use client"

import type { IconButtonProps } from "@chakra-ui/react"
import { ClientOnly, IconButton, Skeleton } from "@chakra-ui/react"
import { ThemeProvider, useTheme } from "next-themes"
import type { ThemeProviderProps } from "next-themes/dist/types"
import { forwardRef } from "react"
import { LuMoon, LuSun } from "react-icons/lu"

// Updated ColorModeProvider to always set dark mode
export function ColorModeProvider(props: ThemeProviderProps) {
  return (
    <ThemeProvider
      attribute="class"
      disableTransitionOnChange
      defaultTheme="dark" // Set the default theme to dark
      {...props}
    />
  )
}

export function useColorMode() {
  const { resolvedTheme, setTheme } = useTheme()

  // Prevent toggling; always set to dark
  const setDarkMode = () => {
    setTheme("dark")
  }

  return {
    colorMode: resolvedTheme,
    setColorMode: setDarkMode, // Always set to dark
    toggleColorMode: setDarkMode, // Prevent toggling
  }
}

export function useColorModeValue<T>(light: T, dark: T) {
  const { colorMode } = useColorMode()
  return colorMode === "light" ? light : dark
}

export function ColorModeIcon() {
  const { colorMode } = useColorMode()
  return colorMode === "light" ? <LuSun /> : <LuMoon />
}

interface ColorModeButtonProps extends Omit<IconButtonProps, "aria-label"> {}

export const ColorModeButton = forwardRef<
  HTMLButtonElement,
  ColorModeButtonProps
>(function ColorModeButton(props, ref) {
  const { toggleColorMode } = useColorMode()
  return (
    <ClientOnly fallback={<Skeleton boxSize="8" />}>
      <IconButton
        onClick={toggleColorMode} // This will only set dark mode
        variant="ghost"
        aria-label="Toggle color mode"
        size="sm"
        ref={ref}
        {...props}
        css={{
          _icon: {
            width: "5",
            height: "5",
          },
        }}
      >
        <ColorModeIcon />
      </IconButton>
    </ClientOnly>
  )
})