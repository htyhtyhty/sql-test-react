import React, { useState, useEffect, useRef } from "react";
import { format } from "sql-formatter";
import EditorWorker from "monaco-editor/esm/vs/editor/editor.worker?worker";
import { initDB, runSQL } from "../../utils/sqlExecutor";
import { QueryExecResult } from "sql.js";
import * as monaco from "monaco-editor";
import IStandaloneCodeEditor = monaco.editor.IStandaloneCodeEditor;

export const SqlEditor = () => {
};
