import { Dialog, Button, Heading, Text } from "@radix-ui/themes";
import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";

const MarkdownListPage = () => {
  const [markdownFiles, setMarkdownFiles] = useState([]);
  const [selectedMarkdown, setSelectedMarkdown] = useState(null);
  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    // Fetch the list of markdown files
    fetch("/markdown-files.json")
      .then((response) => response.json())
      .then((data) => {
        const filePromises = data.files.map((file) =>
          fetch(`/markdown/${file}`)
            .then((response) => response.text())
            .then((content) => {
              const titleMatch = content.match(/^# (.+)$/m);
              const title = titleMatch ? titleMatch[1] : file;
              return { title, content };
            })
        );
        return Promise.all(filePromises);
      })
      .then((files) => setMarkdownFiles(files))
      .catch((err) => console.error("Error fetching markdown files:", err));
  }, []);

  const handleModalClose = () => {
    setSelectedMarkdown(null);
    setOpenModal(false);
  };
  const handleModalOpen = (content) => {
    setSelectedMarkdown(content);
    setOpenModal(true);
  };

  return (
    <div className="markdown-list">
      <Heading size="4">Documentation Files</Heading>
      <ul>
        {markdownFiles.map(({ title, content }) => (
          <li
            key={title}
            className="markdown-list-item pointer"
            onClick={() => handleModalOpen(content)}
          >
            {title}
            <Button className="floatRight" variant="solid" color="blue">
              View
            </Button>
          </li>
        ))}
      </ul>

      <Dialog.Root open={openModal}>
        <Dialog.Content
          className="dialog-content p-6 bg-white rounded shadow-lg mx-auto"
          minWidth="90vw"
        >
          <Dialog.Description asChild>
            <div style={{ position: "relative", float: "right" }}>
              <Button
                className=""
                variant="soft"
                color="gray"
                onClick={handleModalClose}
              >
                X
              </Button>
            </div>
            <Text className="mb-4">
              <ReactMarkdown>{selectedMarkdown}</ReactMarkdown>
            </Text>
          </Dialog.Description>
          <div className="floatRight mt-2.5">
            <Button variant="soft" color="gray" onClick={handleModalClose}>
              Close
            </Button>
          </div>
        </Dialog.Content>
      </Dialog.Root>
    </div>
  );
};

export default MarkdownListPage;
