---
title: Solidworks MCP
description: MCP Server to Connect Claude to Solidworks
date: 2026-11-02
category: Personal
tags: [Python, MCP]
featured: true
---

This project is an MCP (Model Context Protocol) server that connects Claude to SolidWorks, allowing Claude to inspect, build, and edit CAD models through conversation. My objectives were to cover the full CAD workflow, from sketching a part to assembling it and producing drawings, and to make it safe to use on real files.

The server is written in Python and communicates with SolidWorks through its COM API, the same interface SolidWorks macros use. It attaches to a running SolidWorks session, or starts one if none is open. From there, Claude has access to 54 tools covering file management, model inspection, sketching, features, assemblies, drawings, and exporting. For example, Claude can sketch a profile, extrude and fillet it, check its mass properties, mate it into an assembly, and generate a drawing with a bill of materials.

Since Claude is working on real files, I added safeguards: documents with unsaved changes cannot be closed without explicitly saving or discarding, exports and batch tools never modify the source files, and the tools that run custom code can be disabled entirely.

The server was built and tested against SolidWorks 2026. The source code is available on [GitHub](https://github.com/needmoneyfor911/solidworks-mcp).