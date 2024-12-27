"use client";
import { useState, useEffect } from "react";
import { readPdf } from "lib/parse-resume-from-pdf/read-pdf";
import type { TextItems } from "lib/parse-resume-from-pdf/types";
import { groupTextItemsIntoLines } from "lib/parse-resume-from-pdf/group-text-items-into-lines";
import { groupLinesIntoSections } from "lib/parse-resume-from-pdf/group-lines-into-sections";
import { extractResumeFromSections } from "lib/parse-resume-from-pdf/extract-resume-from-sections";
import { ResumeDropzone } from "components/ResumeDropzone";
import { Heading, Link, Paragraph } from "components/documentation";
import { ResumeTable } from "parser/ResumeTable";
import { FlexboxSpacer } from "components/FlexboxSpacer";

const RESUME_EXAMPLES = [
  {
    fileUrl: "resume-example/Resume-Pawanraj (2).pdf",
    description: <span />,
  },
  {
    fileUrl: "resume-example/ResumeSuite-resume.pdf",
    description: (
      <span>
        Created with ResumeSuite resume builder -{" "}
        <Link href="/resume-builder">Link</Link>
      </span>
    ),
  },
];

const defaultFileUrl = RESUME_EXAMPLES[0]["fileUrl"];

export default function ResumeParser() {
  const [fileUrl, setFileUrl] = useState(defaultFileUrl);
  const [textItems, setTextItems] = useState<TextItems>([]);
  const lines = groupTextItemsIntoLines(textItems || []);
  const sections = groupLinesIntoSections(lines);
  const resume = extractResumeFromSections(sections);

  useEffect(() => {
    async function loadPdf() {
      const textItems = await readPdf(fileUrl);
      setTextItems(textItems);
    }
    loadPdf();
  }, [fileUrl]);

  return (
    <main className="h-full w-full overflow-hidden bg-gray-50 text-gray-900">
      <div className="grid md:grid-cols-6 gap-6">
        <div className="flex flex-col px-6 py-4 md:col-span-3 bg-white rounded-lg shadow-lg">
          <section className="max-w-[600px] w-full">
            <Heading className="text-primary text-2xl font-bold mt-4 mb-2">
              Resume Parser
            </Heading>
            <Paragraph>
              <span className="font-semibold">
                Add your resume below
              </span>{" "}
              to see how well it would be parsed by an Application Tracking
              System (ATS).
            </Paragraph>
            <ResumeDropzone
              onFileUrlChange={(fileUrl) =>
                setFileUrl(fileUrl || defaultFileUrl)
              }
              playgroundView={true}
              className="mt-6"
            />
            <Heading level={2} className="mt-10 text-xl font-semibold">
              Results
            </Heading>
            <ResumeTable resume={resume} />
          </section>
        </div>
        <div className="flex justify-center items-center md:col-span-3">
          <section className="w-full max-w-[600px] p-4 bg-white rounded-lg shadow-lg">
            <div className="relative aspect-w-7 aspect-h-[9.5] overflow-hidden rounded-lg">
              <iframe
                src={`${fileUrl}#navpanes=0`}
                className="h-full w-full border border-gray-200 rounded-lg"
              />
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
