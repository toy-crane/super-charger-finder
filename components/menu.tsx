import React from "react"

import {
  Box,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material"
import Image from "next/image"

interface MenuProps {
  openDrawer: boolean
  onClick: () => void
}

const Menu = ({ openDrawer, onClick }: MenuProps) => {
  return (
    <Drawer anchor={"left"} open={openDrawer} onClose={onClick}>
      <Box
        width={200}
        p={2}
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 1,
        }}
      >
        <Box sx={{ justifySelf: "center", alignSelf: "center" }}>
          <Image
            src="/logo.png"
            alt="logo"
            width={120}
            height={40}
            onClick={onClick}
            style={{ cursor: "pointer" }}
          />
        </Box>
        <Divider />
        <List>
          <ListItem>
            <ListItemButton>
              <ListItemText
                primary="기능 제안하기"
                onClick={() =>
                  (document.location = "https://forms.gle/zPZq9HV2UcLoLYyM9")
                }
              />
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton>
              <ListItemText
                primary="개발중인 기능들"
                onClick={() =>
                  (document.location =
                    "https://toycrane.notion.site/4df840900ebd4a0da537a77fb085f544?v=a97db06df5c24d949565c7b49e1084f1")
                }
              />
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton>
              <ListItemText
                primary="슈차 파인더 개발자에게 후원하기"
                onClick={() =>
                  (document.location = "https://toss.me/wonderwork")
                }
              /
              >
            </ListItemButton>
          </ListItem>
        </List>
      </Box>
    </Drawer>
  )
}

export default Menu
