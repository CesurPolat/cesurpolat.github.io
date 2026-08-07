import { AfterViewInit, Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { PROJECTS_BY_SLUG, PortfolioProject } from '../../data/projects';
import { LoadingStateService } from '../../shared/loading-state.service';
import { SeoService } from '../../shared/seo.service';

@Component({
  selector: 'app-project-detail',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './project-detail.html',
  styleUrl: './project-detail.css'
})
export class ProjectDetailComponent implements AfterViewInit {
  private readonly route = inject(ActivatedRoute);
  private readonly loadingState = inject(LoadingStateService);
  private readonly seo = inject(SeoService);

  readonly project: PortfolioProject;

  constructor() {
    const slug = this.route.snapshot.data['projectSlug'] as string;
    const project = PROJECTS_BY_SLUG.get(slug);

    if (!project) {
      throw new Error(`Unknown project slug: ${slug}`);
    }

    this.project = project;
    this.seo.setProjectMetadata(project);
  }

  ngAfterViewInit(): void {
    this.loadingState.finishLoading();
  }
}
