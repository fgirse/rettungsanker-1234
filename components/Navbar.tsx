"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X, ChevronDown } from "lucide-react"
import { Button } from "../components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "../components/ui/dropdown-menu"
import { Sheet, SheetContent, SheetTrigger } from "../components/ui/sheet"
import { cn } from "@/lib/utils"
import LogoNeu from "../public/LogoNeu.png"
import Bulleye from "../public/Bulleye.svg"

const menuItems = [
  { label: "home", href: "/" },
  {
    label: "über uns",
    href: "/about",
    submenu: [
      { label: "geschichte", href: "/about/geschichte" },
      { label: "team", href: "/about/team" },
    ],
  },
  {
    label: "drinks & snacks",
    href: "/drinks",
    submenu: [
      { label: "Biere", href: "/drinks/biere" },
      { label: "Weine", href: "/drinks/weine" },
      { label: "Longdrinks", href: "/drinks/longdrinks" },
      { label: "Kurze", href: "/drinks/kurze" },
      { label: "Softdrinks", href: "/drinks/softdrinks" },
      { label: "Snacks", href: "/drinks/snacks" },
    ],
  },
  { label: "sportarena", href: "/sportarena" },
  { label: "wohin?", href: "/wohin" },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false)
  const [openSubmenu, setOpenSubmenu] = React.useState<string | null>(null)

  const toggleSubmenu = (label: string) => {
    setOpenSubmenu(openSubmenu === label ? null : label)
  }

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 lg:bg-[url('/Wood3.svg')] lg:bg-cover lg:bg-no-repeat lg:bg-center">
      <div className="container mx-auto flex h-[13vh] items-center justify-between px-4">
        <div className="relative ml-12">
          <Link href="/" className="relative lg:left-[5vw] ">
            <Image src={LogoNeu} alt="Logo" width={100} height={50} />
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden items-center gap-6 md:flex">
          {menuItems.map((item) =>
            item.submenu ? (
              <DropdownMenu key={item.label}>
                <DropdownMenuTrigger className="flex items-center gap-1 text-[1.66em] text-white uppercase font-medium transition-colors hover:bg-yellow-600 rounded-xl px-5 py-3">
                   <div className="flex items-center gap-x-5">
                        <Image src={Bulleye} alt="Bullauge" width={50} height={50} />
                  {item.label}
                  </div>
                  <ChevronDown className="h-4 w-4" />
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start" className="w-48">
                  {item.submenu.map((subItem) => (
                    <DropdownMenuItem key={subItem.label} asChild>
                      <Link href={subItem.href} className="cursor-pointer">
                     
                        {subItem.label}
                    
                      </Link>
                    </DropdownMenuItem>
                  ))}
        {/* Logo */}
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Link
                key={item.label}
                href={item.href}
                className="text-[1.66em] text-white uppercase font-medium transition-colors hover:bg-yellow-600 rounded-xl px-5 py-"
              >
                <div className="flex items-center gap-x-5">
                  <Image src={Bulleye} alt="Bullauge" width={50} height={50} />
                  {item.label}
                </div>
              </Link>
            ),
          )}
        </div>

        {/* Mobile Menu */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[80vw] p-0 bg-stone-300">
            <div className="flex h-full flex-col">
              {/* Mobile Menu Header */}
              <div className="flex items-center justify-between border-b border-border p-4">
                <span className="text-xl font-bold">Menu</span>
                <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)}>
                  <X className="h-6 w-6" />
                </Button>
              </div>

              {/* Mobile Menu Items */}
              <div className="flex-1 overflow-y-auto p-4">
                <div className="flex flex-col gap-2">
                  {menuItems.map((item) => (
                    <div key={item.label}>
                      {item.submenu ? (
                        <div>
                          <button
                            onClick={() => toggleSubmenu(item.label)}
                            className="flex w-full items-center justify-between rounded-md px-7 py-2 text-[2.66em] headingA font-medium uppercase transition-colors hover:bg-yellow-600 hover:text-white"
                          >
                            {item.label}
                            <ChevronDown
                              className={cn("h-4 w-4 transition-transform", openSubmenu === item.label && "rotate-180")}
                            />
                          </button>
                          {openSubmenu === item.label && (
                            <div className="ml-4 mt-1 flex flex-col gap-1 border-l-2 border-border pl-3">
                              {item.submenu.map((subItem) => (
                                <Link
                                  key={subItem.label}
                                  href={subItem.href}
                                  onClick={() => setIsOpen(false)}
                                  className="rounded-md px-3 py-2 text-sm transition-colors hover:bg-accent hover:text-accent-foreground"
                                >
                                  {subItem.label}
                                </Link>
                              ))}
                            </div>
                          )}
                        </div>
                      ) : (
                        <Link
                          href={item.href}
                          onClick={() => setIsOpen(false)}
                          className="block rounded-md px-3 py-2 text-[2.66em] headingA uppercase font-medium transition-colors hover:bg-yellow-600 hover:text-white"
                        >
                          {item.label}
                        </Link>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  )
}
