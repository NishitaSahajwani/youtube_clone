import React from 'react'
import { Stack } from '@mui/material'
import { categories } from '../Utils/Constant'

function Sidebar({setselectCategory,selectCategory}) {
    // const selectedButton = 'New'
  return (
    <Stack
    direction="row"
    sx={{
      overflowY: "auto",
      height: { sx: "auto", md: "95%" },
      flexDirection: { md: "column" },
    }}
  >
    {categories.map((category) => (
      <button
        className="category-btn"
        onClick={() => setselectCategory(category.name)}
        style={{
          background: category.name === selectCategory && "#D71313",
          color: "white",
        }}
        key={category.name}
      >
        <span style={{ color: category.name === selectCategory ? "white" : "#D71313", marginRight: "15px" }}>
          {category.icon}
        </span>
        <span style={{ opacity: category.name === selectCategory ? "1" : "0.8" }}>
          {category.name}
        </span>
      </button>
    ))}
  </Stack>
  )
}

export default Sidebar